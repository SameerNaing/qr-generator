from pandas import DataFrame, Series

from constants import LINK_REGEX


__all__ = ["get_unique_cols"]


def get_unique_cols(df: DataFrame) -> list[str]:
    """Function to get unique values columns names
    Args:
        df (DataFrame): pandas data frame

    Returns:
        list[str]: unique value columns names
    """

    col = []
    for column in df.columns:
        series = Series(df[column])

        if not series.is_unique:
            continue
        col.append(column)

    return col

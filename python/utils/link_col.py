import re
from pandas import DataFrame

from constants import LINK_REGEX


__all__ = ["get_link_cols"]


def get_link_cols(df: DataFrame) -> list[str]:
    """Function to get link containing columns name

    Args:
        df (DataFrame): pandas data frame

    Returns:
        list[str]: columns name of link columns
    """

    col = []
    for column in df.columns:
        data = df[column][0]
        regex = re.compile(LINK_REGEX)
        match = re.match(regex, str(data))

        if not match:
            continue

        col.append(column)

    return col

from pandas import DataFrame

__all__ = ["drop_unnamed_col"]


def drop_unnamed_col(df: DataFrame):
    """Function to drop 'Unnamed' column

    Args:
        columns_list (list[str]): columns list
        df (DataFrame): data frame object  

    """
    for column in df.columns:
        if "Unnamed" in column:
            df = df.drop(labels=[column], axis=1)

    return df

import json
import pandas as pd

from utils import drop_unnamed_col, get_link_cols, get_unique_cols

__all__ = ["get_columns"]


def get_columns(csv_file: str):
    """Function get Columns in CSV file

    Args:
        csv_file (str): CSV File Path
    """

    df = pd.read_csv(csv_file)

    df = drop_unnamed_col(df)
    link_columns = get_link_cols(df)

    if len(link_columns) == 0:
        raise Exception("The CSV does not contains any link.")

    df = df.drop(labels=link_columns, axis=1)
    df = df.dropna(axis=1)
    if len([*df.columns]) == 0:
        raise Exception(
            "Must have at least one colum for naming the output image files, zero found")

    name_columns = get_unique_cols(df)

    if len(name_columns) == 0:
        raise Exception(
            "Unique values columns should exists for image name, none found.")

    print(json.dumps({"names": name_columns, "links": link_columns}))

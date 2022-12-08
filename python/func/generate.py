import pandas as pd

from utils import create_qr


__all__ = ["generate_qr"]


def generate_qr(csv_file: str, name_col: str, url_col: str, qr_logo: str, output_folder: str):
    """Function to generate qr code from csv file

    Args:
        csv_file (str): csv file path
        name_col (str): image name column
        url_col (str): qr url column
        qr_logo (str): logo to put in middle of qr
        output_folder (str): output folder path
    """
    

    df = pd.read_csv(csv_file, usecols=[name_col, url_col])
    df = df.dropna()

    names = df[name_col].to_list()
    urls = df[url_col].to_list()    
    logo = qr_logo if qr_logo != 'none' else None
  

    for i in range(len(names)):
        create_qr(image_name=str(names[i]), link=urls[i],
                  logo=logo, output_folder=output_folder)

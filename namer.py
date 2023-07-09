import os

from glob import glob


original_dif = './detail/character/'

globed = glob(original_dif + '*돌파*.webp')

names = []

for globs in globed:
    temp_name = os.path.splitext(globs)[0].split('\\')[1]
    
    rename = temp_name.split('돌파')[0] + '돌파특성' + temp_name.split('돌파')[1]
    names.append(rename)

    rename_dir = os.path.join(original_dif + '/' + rename + '.webp')
    os.rename(globs, rename_dir)
FROM agners/archlinuxarm
RUN yes | pacman -Sy chromium python3 python-pip dos2unix
COPY . /code
WORKDIR /code/kjell-scraper
RUN dos2unix requirements.txt
RUN pip install -r requirements.txt
RUN yes | pacman -Rs dos2unix
CMD ["gunicorn","-b","0.0.0.0:3000","-w","4","app:app"]
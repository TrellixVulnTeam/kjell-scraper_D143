import psycopg2

db_name = "kjell"
db_username = "postgres"
db_password = "chaplin97"
db_port = "5432"
db_host = "192.168.1.237"


def getinfo():
    con = psycopg2.connect(dbname=db_name, host=db_host,
                           user=db_username, password=db_password, port=db_port)
    cur = con.cursor()
    cur.execute("""
        SELECT * FROM kjell;
    """)
    response = cur.fetchall()
    cur.close()
    con.close()
    json_list = []
    for item in response:
        json_list.append(
            {"id": item[0], "timestamp": item[1], "time": item[2], "run_number": item[3]})
    return json_list
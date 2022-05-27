import sqlite3

DATABASE = 'database.db'
db = sqlite3.connect(DATABASE)

cursor = db.cursor()


cursor.execute('DROP TABLE IF EXISTS users')
cursor.execute("""CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT,
                            email VARCHAR(512) NOT NULL,
                            password VARCHAR(256) NOT NULL,
                            profile_pict VARCHAR(512),
                            created TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
                            firstname VARCHAR(128),
                            lastname VARCHAR(128),
                            last_edited TIMESTAMP DEFAULT NULL,
                                FOREIGN KEY (id)
                                REFERENCES favorites(user_id)                            
                                )
                            """)

cursor.execute('DROP TABLE IF EXISTS favorites')
cursor.execute("""CREATE TABLE favorites (id INTEGER PRIMARY KEY AUTOINCREMENT,
                            recipe_id INTEGER,
                            user_id INTEGER,
                                FOREIGN KEY (user_id)
                                REFERENCES users(id)
                                )                           
                            """)

db.commit()
db.close()

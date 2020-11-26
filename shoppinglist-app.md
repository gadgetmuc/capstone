## Neue Fische web development bootcamp digitales Gesellenstück
## Der Gadget
# Shoppinglist-App

## Intro
Die Idee für das Gesellenstück kam mir vor ein paar Jahren. Ich fand und finde das Konzept Einkaufszettel recht ineffektiv, weil es nur das abbildet, was einem im Moment des Schreibens eingefallen ist.
Der Gedanke dahinter ist, dass ich ... __DAS HIER AUCH MAL ZU ENDE SCHREIBE!!!__


## Datenbank-Struktur
Die App benötigt eine Datenbank mit drei tables: 
- table articles // die überhaupt angebotenen Artikel
    
    - articledescription: VARCHAR(255) NOT NULL
    - price: INTEGER NOT NULL
    - storageplace: VARCHAR(10) NOT NULL
    - articlecategory: VARCHAR(255) NOT NULL
    - articleid: INTEGER PRIMARY KEY NOT NULL



- table userdata // spricht für sich selbst

    - username: VARCHAR(30) NOT NULL
    - email: VARCHAR(50) NOT NULL
    - password: VARCHAR(127) NOT NULL -> _gehasht_
    - user-id: INTEGER PRIMARY KEY NOT NULL

- table shoppinglists:

    - shoppinglistid: VARCHAR(255) NOT NULL -> _UUID_
    - articlelist: VARCHAR(65536) -> _darf NULL werden!_
    - writepermissions: VARCHAR(255) -> _wer darf ergänzen - letztendlich ein object aus user-IDs_
    - readpermissions: VARCHAR(255) NOT NULL -> _wer darf einkaufen gehen - letztendlich ein object aus user-IDs_



## User-Stories
- 


## Lizenzen
noch nicht so relevant, aber überdenkenswert
ggf. gar keine Lizenz angeben :)


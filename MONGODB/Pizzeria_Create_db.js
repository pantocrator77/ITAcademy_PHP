use pizzeria
db.pedidos.insertOne({
  "id": 1,
  "fecha": "9/5/2021",
  "hora": "12:41 AM",
  "direccion": "19 Pond Park",
  "cantidad": 17,
  "precio total": "€97,48"
  }
  )
db.pedidos.insertOne({
  "id": 2,
  "fecha": "12/18/2021",
  "hora": "8:19 AM",
  "direccion": "12 Fuller Center",
  "cantidad": 1,
  "precio total": "€69,65"
  }
  )
db.pedidos.insertOne({
  "id": 3,
  "fecha": "9/4/2021",
  "hora": "2:47 PM",
  "direccion": "067 Delladonna Terrace",
  "cantidad": 13,
  "precio total": "€47,74"
  }
  )
db.pedidos.insertOne({
  "id": 4,
  "fecha": "12/26/2021",
  "hora": "6:55 AM",
  "direccion": "782 Caliangt Trail",
  "cantidad": 17,
  "precio total": "€34,51"
  }
  )
db.pedidos.insertOne({
  "id": 5,
  "fecha": "9/28/2021",
  "hora": "1:33 AM",
  "direccion": "0593 Oxford Court",
  "cantidad": 5,
  "precio total": "€73,59"
  }
  )
db.pedidos.insertOne({
  "id": 6,
  "fecha": "6/21/2021",
  "hora": "11:24 AM",
  "direccion": "805 David Circle",
  "cantidad": 14,
  "precio total": "€31,05"
  }
  )
db.pedidos.insertOne({
  "id": 7,
  "fecha": "10/29/2021",
  "hora": "4:34 AM",
  "direccion": "69 Pepper Wood Alley",
  "cantidad": 3,
  "precio total": "€93,58"
  }
  )
db.pedidos.insertOne({
  "id": 8,
  "fecha": "7/16/2021",
  "hora": "4:47 AM",
  "direccion": "805 Meadow Ridge Pass",
  "cantidad": 14,
  "precio total": "€24,87"
  }
  )
db.pedidos.insertOne({
  "id": 9,
  "fecha": "10/8/2021",
  "hora": "2:55 AM",
  "direccion": "4 Roth Circle",
  "cantidad": 15,
  "precio total": "€14,45"
  }
  )
db.pedidos.insertOne({
  "id": 10,
  "fecha": "8/25/2021",
  "hora": "11:52 PM",
  "direccion": "5694 Lakewood Court",
  "cantidad": 4,
  "precio total": "€56,50"
  }
  )
db.pizzerias.insertOne({
  "id": 1,
  "direccion": "84514 Forest Run Avenue",
  "codigo postal": 83548,
  "localidad": "Edéa",
  "provincia": "Dukhovshchina"
  }
  )
db.pizzerias.insertOne({
  "id": 2,
  "direccion": "165 Ridgeway Drive",
  "codigo postal": 85149,
  "localidad": "Faro",
  "provincia": "Yunmen"
  }
  )
db.pizzerias.insertOne({
  "id": 3,
  "direccion": "24750 Monica Trail",
  "codigo postal": 76518,
  "localidad": "Alah Sāy",
  "provincia": "Xiaocun"
  }
  )
db.pizzerias.insertOne({
  "id": 4,
  "direccion": "213 Goodland Center",
  "codigo postal": 76234,
  "localidad": "Chuanshan",
  "provincia": "Mutoko"
  }
  )
db.pizzerias.insertOne({
  "id": 5,
  "direccion": "9 Stoughton Way",
  "codigo postal": 64764,
  "localidad": "Garibaldi",
  "provincia": "Ransiki"
}
  )
db.empleados.insertOne({
  "id": 1,
  "nombre": "Tyne",
  "apellido": "Reape",
  "nif": "556495756-3",
  "telefono": "158-320-7709",
  "cargo": "pizzero"
  }
  )
db.empleados.insertOne({
  "id": 2,
  "nombre": "Gerome",
  "apellido": "Jolin",
  "nif": "492982080-4",
  "telefono": "410-954-8608",
  "cargo": "repartidor"
  } 
  )
db.empleados.insertOne({
  "id": 3,
  "nombre": "Juliane",
  "apellido": "Maykin",
  "nif": "191248050-6",
  "telefono": "210-488-9992",
  "cargo": "pizzero"
  }
  )
db.empleados.insertOne({
  "id": 4,
  "nombre": "Ryley",
  "apellido": "Lobb",
  "nif": "884227357-0",
  "telefono": "915-211-4254",
  "cargo": "repartidor"
  }
  )
db.empleados.insertOne({
  "id": 5,
  "nombre": "Hillery",
  "apellido": "Pucker",
  "nif": "389239229-3",
  "telefono": "413-151-1985",
  "cargo": "repartidor"
  }
  )
db.repartos.insertOne({
  "id": 1,
   "nombre": "Gerome",
  "apellido": "Jolin",
  "fecha": "2/2/2021",
  "hora": "11:52 PM",
  }
  )
db.repartos.insertOne({
  "id": 2,
    "nombre": "Ryley",
  "apellido": "Lobb",
  "fecha": "15/7/2021",
  "hora": "7:30 PM",
  }
  )
db.repartos.insertOne({
  "id": 3,
   "nombre": "Hillery",
  "apellido": "Pucker",
  "fecha": "22/10/2021",
  "hora": "8:50 PM",
  }
  )
db.cat_pizzas.insertOne({
  "id": 1,
   "categoria": "tradicionales",
  }
  )
db.cat_pizzas.insertOne({
  "id": 2,
   "categoria": "creativas",
  }
  )
db.cat_pizzas.insertOne({
  "id": 3,
   "categoria": "vegetarianas",
  })
db.pizzas.insertOne({
  "id": 1,
  "nombre": "margarita",
  "descripcion": "ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
  "foto": "http://dummyimage.com/231x100.png/5fa2dd/ffffff",
  "precio": "€14,29"
  })
db.pizzas.insertOne({
  "id": 2,
  "nombre": "marinara",
  "descripcion": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi",
  "foto": "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
  "precio": "€9,44"
  })
db.pizzas.insertOne({
  "id": 3,
  "nombre": "quesos",
  "descripcion": "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
  "foto": "http://dummyimage.com/165x100.png/cc0000/ffffff",
  "precio": "€9,81"
  })
db.pizzas.insertOne({
  "id": 4,
  "nombre": "atun",
  "descripcion": "molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
  "foto": "http://dummyimage.com/164x100.png/cc0000/ffffff",
  "precio": "€14,24"
  }
  )
db.pizzas.insertOne({
  "id": 5,
  "nombre": "blanca",
  "descripcion": "amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla",
  "foto": "http://dummyimage.com/167x100.png/dddddd/000000",
  "precio": "€10,50"
  }
  )
db.hamburguesas.insertOne({
  "id": 1,
  "nombre": "normal",
  "descripcion": "aenean sit amet justo morbi ut odio cras mi pede",
  "foto": "http://dummyimage.com/160x100.png/dddddd/000000",
  "precio": "€10,37"
  }
  )
db.hamburguesas.insertOne({
  "id": 2,
  "nombre": "doble",
  "descripcion": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
  "foto": "http://dummyimage.com/228x100.png/5fa2dd/ffffff",
  "precio": "€14,32"
  }
  )
db.hamburguesas.insertOne({
  "id": 3,
  "nombre": "doble con bacon",
  "descripcion": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
  "foto": "http://dummyimage.com/107x100.png/dddddd/000000",
  "precio": "€10,50"
  }
  )
db.hamburguesas.insertOne({
  "id": 4,
  "nombre": "deluxe",
  "descripcion": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
  "foto": "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
  "precio": "€5,92"
  }
  )
db.hamburguesas.insertOne({
  "id": 5,
  "nombre": "vegetal",
  "descripcion": "elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy",
  "foto": "http://dummyimage.com/119x100.png/ff4444/ffffff",
  "precio": "€6,60"
  }
  )
db.bebidas.insertOne({
  "id": 1,
  "nombre": "cerveza",
  "descripcion": "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
  "foto": "http://dummyimage.com/102x100.png/dddddd/000000",
  "precio": "€10,91"
  }
  )
db.bebidas.insertOne({
  "id": 2,
  "nombre": "agua",
  "descripcion": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec",
  "foto": "http://dummyimage.com/205x100.png/dddddd/000000",
  "precio": "€8,25"
  }
  )
db.bebidas.insertOne({
  "id": 3,
  "nombre": "cola",
  "descripcion": "interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
  "foto": "http://dummyimage.com/134x100.png/cc0000/ffffff",
  "precio": "€8,78"
  }
  )
db.clientes.insertOne({
  "id": 1,
  "nombre": "Jocelyn",
  "apellido": "Storek",
  "direccion": "039 Mifflin Plaza",
  "codigo postal": "39503",
  "telefono": "668-289-8628"
  }
  )
db.clientes.insertOne({
  "id": 2,
  "nombre": "Joscelin",
  "apellido": "Goutcher",
  "direccion": "87 Melby Crossing",
  "codigo postal": "77503",
  "telefono": "493-926-2532"
  }
  )
db.clientes.insertOne({
  "id": 3,
  "nombre": "Deva",
  "apellido": "Rutherfoord",
  "direccion": "6397 Thackeray Avenue",
  "codigo postal": "598 93",
  "telefono": "468-220-8027"
  }
  )
db.clientes.insertOne({
  "id": 4,
  "nombre": "Brandtr",
  "apellido": "Pes",
  "direccion": "80371 Bobwhite Street",
  "codigo postal": null,
  "telefono": "963-275-3845"
  }
  )
db.clientes.insertOne({
  "id": 5,
  "nombre": "Stephani",
  "apellido": "Breeder",
  "direccion": "27 Crescent Oaks Place",
  "codigo postal": "4431",
  "telefono": "119-415-4477"
  }
  )
db.clientes.insertOne({
  "id": 6,
  "nombre": "Stanwood",
  "apellido": "Simner",
  "direccion": "12 Roxbury Plaza",
  "codigo postal": "711 82",
  "telefono": "487-571-6692"
  }
  )
db.clientes.insertOne({
  "id": 7,
  "nombre": "Marne",
  "apellido": "Sherrell",
  "direccion": "6218 Monica Court",
  "codigo postal": null,
  "telefono": "253-820-6697"
  }
  )
db.clientes.insertOne({
  "id": 8,
  "nombre": "Joey",
  "apellido": "McNutt",
  "direccion": "22 Twin Pines Trail",
  "codigo postal": "38309",
  "telefono": "254-887-1056"
  }
  )
db.clientes.insertOne({
  "id": 9,
  "nombre": "Archambault",
  "apellido": "Coxhead",
  "direccion": "5 Jenna Crossing",
  "codigo postal": "604590",
  "telefono": "106-220-6275"
  }
  )
db.clientes.insertOne({
  "id": 10,
  "nombre": "Stafani",
  "apellido": "Gleder",
  "direccion": "3 Crest Line Street",
  "codigo postal": "355543",
  "telefono": "507-513-7777"
}
)

db.provincias.insertMany([{ 

  "provincia" : "Barcelona", "localidades" : [ "Hospitalet", "Badalona", "Sant cugat"],

  "provincia" : "Girona", "localidades" : [ "Begur", "Figueres"],

  "provincia" : "Tarragona", "localidades" : "Salou"

   }
])


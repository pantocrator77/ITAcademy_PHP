use culldampolla
db.gafas.insertOne(
    {
        "marca": "RayBan",
        "graduacion cristal": 2,
        "montura": "pasta",
        "color montura": "negra",
        "color cristal": "transparente",
        "precio": 120
    }
    )
db.gafas.insertOne(
       {
        "marca": "Armani",
        "graduacion cristal": 1,
        "montura": "metal",
        "color montura": "gris",
        "color cristal": "transparente",
        "precio": 165
    }
    )
db.gafas.insertOne(
 {
        "marca": "Etnia",
        "graduacion cristal": 1,
        "montura": "madera",
        "color montura": "marron",
        "color cristal": "transparente",
        "precio": 145
    }
    )
db.gafas.insertOne(
     {
        "marca": "Guess",
        "graduacion cristal": 3,
        "montura": "plastico",
        "color montura": "blanco",
        "color cristal": "azulado",
        "precio": 170
    }
    )
db.gafas.insertOne(
     {
        "marca": "RayBan",
        "graduacion cristal": 1,
        "montura": "metal",
        "color montura": "gris",
        "color cristal": "azulado",
        "precio": 135
    }
    )
db.provedores.insertOne(
	 {
        "nombre": "Roberto Sanchez",
        "calle": "Avila",
        "numero": 12,
        "piso": "local",
        "puerta": 3,
        "ciudad": "Barcelona",
        "codigo postal": 08003,
        "pais": "España",
        "telefono": "93 36748392",
        "fax": "93 36748394",
        "NIF": "B23467655",
    }
    )
db.provedores.insertOne(
    {
        "nombre": "Gafas girona",
        "calle": "Mendez",
        "numero": 144,
        "piso": "local",
        "puerta": 1,
        "ciudad": "Girona",
        "codigo postal": 07045,
        "pais": "España",
        "telefono": "92 33337586",
        "fax": "92 33337588",
        "NIF": "B3542456",
    }
    )
db.provedores.insertOne(
     {
        "nombre": "Manolito gafas",
        "calle": "Llull",
        "numero": 254,
        "piso": "2",
        "puerta": 3,
        "ciudad": "Barcelona",
        "codigo postal": 08033,
        "pais": "España",
        "telefono": "93 35768594",
        "fax": "93 35768595",
        "NIF": "B3596073",
    }
    )
db.clientes.insertOne(
   {
  "id": 1,
  "nombre": "Merrielle",
  "apellido": "Laskey",
  "direccion": "2141 Northport Way",
  "telefono": "194-440-6909",
  "email": "mlaskey0@joomla.org",
  "fecha registro": "8/28/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007d0"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007d1"
  }
  )
db.clientes.insertOne( {
  "id": 2,
  "nombre": "Aliza",
  "apellido": "Stelfox",
  "direccion": "144 Straubel Center",
  "telefono": "901-270-4597",
  "email": "astelfox1@technorati.com",
  "fecha registro": "1/21/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007d2"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007d3"
  }
  )
db.clientes.insertOne(  {
  "id": 3,
  "nombre": "Neville",
  "apellido": "Neate",
  "direccion": "8 Elmside Parkway",
  "telefono": "645-118-5670",
  "email": "nneate2@dailymail.co.uk",
  "fecha registro": "8/19/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007d4"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007d5"
  }
  )
db.clientes.insertOne( {
  "id": 4,
  "nombre": "Lora",
  "apellido": "Novill",
  "direccion": "23 Holmberg Street",
  "telefono": "407-492-6255",
  "email": "lnovill3@pen.io",
  "fecha registro": "6/7/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007d6"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007d7"
  }
  )
db.clientes.insertOne( {
  "id": 5,
  "nombre": "Leandra",
  "apellido": "Coutts",
  "direccion": "70 Eastlawn Place",
  "telefono": "237-229-7274",
  "email": "lcoutts4@gmpg.org",
  "fecha registro": "2/11/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007d8"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007d9"
  }
  )
db.clientes.insertOne({
  "id": 6,
  "nombre": "Ailene",
  "apellido": "Lourenco",
  "direccion": "9964 Fremont Pass",
  "telefono": "386-196-6796",
  "email": "alourenco5@abc.net.au",
  "fecha registro": "7/9/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007da"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007db"
  }
  )
db.clientes.insertOne({
  "id": 7,
  "nombre": "Inga",
  "apellido": "Rubinshtein",
  "direccion": "072 Eastwood Road",
  "telefono": "964-681-3953",
  "email": "irubinshtein6@biglobe.ne.jp",
  "fecha registro": "8/13/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007dc"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007dd"
  }
  )
db.clientes.insertOne({
  "id": 8,
  "nombre": "Gideon",
  "apellido": "Blannin",
  "direccion": "82 Redwing Terrace",
  "telefono": "156-728-8441",
  "email": "gblannin7@mayoclinic.com",
  "fecha registro": "12/15/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007de"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007df"
  }
  )
db.clientes.insertOne({
  "id": 9,
  "nombre": "Nikola",
  "apellido": "Mawman",
  "direccion": "6 Stoughton Crossing",
  "telefono": "425-682-1240",
  "email": "nmawman8@nationalgeographic.com",
  "fecha registro": "1/30/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007e0"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007e1"
  }
  )
db.clientes.insertOne( {
  "id": 10,
  "nombre": "Brandice",
  "apellido": "Janatka",
  "direccion": "67789 Becker Hill",
  "telefono": "937-708-1661",
  "email": "bjanatka9@t.co",
  "fecha registro": "10/4/2021",
  "cliente referencia": {
    "$oid": "61e151fbfc13ae65c00007e2"
  },
  "vendedor": {
    "$oid": "61e151fbfc13ae65c00007e3"
  }
)
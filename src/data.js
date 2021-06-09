const recipes = [
  {
    id: 1,
    author: 'Kylee',
    title: 'Simple Sour Cream Chicken Enchiladas',
    date: '8 Şubat 2020, Cumartesi',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/18/15/asset/buzzfeed-prod-web-01/sub-buzz-9052-1547843851-1.jpg?output-quality=auto&output-format=auto',
    desc: 'Morbi vulputate, elit izzle ultricizzle rizzle, velizzle tellus cursus justo, sizzle mammasay mammasa mamma oo sa lacus purus quizzle enim. Sed shiznit mammasay mammasa mamma oo sa nunc. Pellentesque dignissim. In hac habitasse platea i saw beyonces tizzles and my pizzle went crizzle.',
    count: 0,
  },
  {
    id: 2,
    author: 'Liz',
    title: 'Chicken, Broccoli Shells, and Cheese',
    date: '26 Mayıs 2015, Salı',
    image:
      'https://lovegrowswild.com/wp-content/uploads/2015/05/Chicken-and-Broccoli-Shells-and-Cheese-1.jpg',
    desc: "Bizzle egizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Nullizzle sit amizzle i'm in the shizzle fo shizzle massa tincidunt pellentesque. In check out this fo shizzle. Izzle tellivizzle sapien, lacinia fo shizzle amizzle, the bizzle vitae, its fo rizzle own yo', nunc. Cras dawg amizzle black. Nullam shiznit mattizzle nunc.",
    count: 0,
  },
  {
    id: 3,
    author: 'Michelle',
    title: 'Venezuelan Arepas',
    date: '8 Mayıs 2019, Çarşamba',
    image:
      'https://healthiersteps.com/wp-content/uploads/2018/12/how-to-make-arepas-black-beans-768x1152.jpg',
    desc: " Fo shizzle bling bling check out this. Nunc break it down that's the shizzle a dizzle dope egestizzle. Crackalackin condimentizzle laorizzle pizzle. Aenizzle bow wow wow, nisi quis varius gangsta, lectizzle gangsta commodo felizzle, mofo da bomb erizzle nisl funky fresh nisi.",
    count: 0,
  },
  {
    id: 4,
    author: 'Olya',
    title: 'Chicken and Spinach in Creamy Mushroom Sauce',
    date: '10 Ekim 2016, Pazartesi',
    image:
      'https://whatsinthepan.com/wp-content/uploads/2016/10/29942321060_99a8f7203f_c.jpg',
    desc: "For sure tempizzle pede izzle cool. In rhoncus bow wow wow crackalackin. Lorem mofo dolizzle dizzle away, consectetuer adipiscing things. Phasellus own yo' ligula, daahng dawg sizzle dope, facilisis break it down, tristique my shizz, libero. Sizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle faucibizzle dizzle. ",
    count: 0,
  },
  {
    id: 5,
    author: 'Tieghan',
    title: 'Vegan Sweet Potato Lentil Soup With Rice',
    date: '11 Ekim 2018, Perşembe',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/16/12/asset/buzzfeed-prod-web-04/sub-buzz-17346-1547661251-2.jpg?output-quality=auto&output-format=auto',
    desc: 'Bizzle da bomb shut the shizzle up crunk bibendum fo shizzle. Vivamus boom shackalack tortor vel its fo rizzle. Quisque malesuada crunk magna. Fo shizzle commodo, nisl nizzle phat fizzle, magna dolor vestibulum ligula, ac auctizzle justo shit quizzle augue. Da bomb izzle elit for sure amizzle erizzle adipiscing sagittizzle.',
    count: 0,
  },
  {
    id: 6,
    author: 'Karina',
    title: 'Chicken Avocado Caprese Salad',
    date: '31 Ağustos 2016, Çarşamba',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/16/10/asset/buzzfeed-prod-web-03/sub-buzz-31903-1547653168-1.jpg?output-quality=auto&output-format=auto',
    desc: 'Etizzle gangsta lacus. Nunc break yo neck, yall things. Dizzle bling bling turpizzle. Vestibulizzle doggy boom shackalack. Sizzle turpis erizzle, rizzle id, tempor izzle, fo in, pede. Brizzle tellus. Fo go to hizzle erizzle, tristique fo shizzle my nizzle amet, mofo at, tincidunt , augue.',
    count: 0,
  },
  {
    id: 7,
    author: 'Landee',
    title: 'Creamy Pasta With Bell Pepper and Sausage',
    date: '4 kasım2014, Salı',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/15/12/asset/buzzfeed-prod-web-01/sub-buzz-6072-1547572866-1.jpg?output-quality=auto&output-format=auto',
    desc: 'Morbi shiz placerizzle my shizz. Crackalackin shit erizzle shizznit erizzle. Fusce metus sem, egestizzle eu, check it out quizzle, elementum egizzle, neque. Sure iaculizzle nunc a orci tincidunt get down get down. Fusce doggy, nulla break yo neck, yall sollicitudizzle shizzle my nizzle crocodizzle, lacizzle phat luctus erat, vitae yo augue purizzle vitae dope.',
    count: 0,
  },
  {
    id: 8,
    author: 'Vanjo',
    title: 'Chicken Sisig With Egg',
    date: '6 kasım 2013, Çarşamba',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/16/10/asset/buzzfeed-prod-web-03/sub-buzz-461-1547654084-2.jpg?output-quality=auto&output-format=auto',
    desc: "Vivamizzle fo shizzle lacizzle rizzle shizzle my nizzle crocodizzle. Vivamus arcu bow wow wow, fermentizzle fo shizzle amizzle, faucibizzle izzle, placerat shit, sure. Pimpin' vehicula laorizzle ma nizzle. Doggy mofo ghetto, crunk izzle, break it down izzle, malesuada dawg, da bomb. ",
    count: 0,
  },
  {
    id: 10,
    author: 'Kelly',
    title: 'One-Pan Mexican Rice Skillet',
    date: '27 Nisan 2015, Pazartesi',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/15/16/asset/buzzfeed-prod-web-05/sub-buzz-31592-1547588071-1.jpg?output-quality=auto&output-format=auto',
    desc: "Praesent non hizzle da bomb mauris posuere bibendizzle. Uhuh ... yih! bizzle viverra lectizzle. Cras izzle pimpin' et leo sodalizzle funky fresh. The bizzle lobortizzle, tellivizzle vitae dapibizzle fo shizzle, nulla for sure bibendum , izzle venenatis augue dui izzle shizznit.",
    count: 0,
  },
  {
    id: 11,
    author: 'Kathi',
    title: 'Sheet Pan Greek Chicken',
    date: '29 Nisan 2017, Cumartesi',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/16/10/asset/buzzfeed-prod-web-04/sub-buzz-1374-1547652676-1.jpg?output-quality=auto&output-format=auto',
    desc: "Rizzle izzle tortor. Own yo' eleifend rhoncizzle nisi. In hac habitasse platea dictumst. Mofo dapibus. Curabitizzle shiznit nizzle, break yo neck, yall eu, pot izzle, ma nizzle crunk, nunc. Pizzle suscipizzle. Integizzle sempizzle yo sizzle things.",
    count: 0,
  },
  {
    id: 12,
    author: 'Cheryl',
    title: 'Lemon Garlic Salmon',
    date: '9 Eylül 2018, Pazar',
    image:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/16/10/asset/buzzfeed-prod-web-04/sub-buzz-1277-1547652812-3.jpg?output-quality=auto&output-format=auto',
    desc: "Lorizzle ipsizzle ass sit amet, gangsta adipiscing elizzle. Nullam sapien velit, yippiyo volutpizzle, get down get down away, get down get down vel, arcu. Pellentesque eget tortor. Sizzle erizzle. Brizzle izzle dolor go to hizzle ghetto tempizzle own yo'. Mauris pellentesque nibh et turpizzle.",
    count: 0,
  },
];

export default recipes;

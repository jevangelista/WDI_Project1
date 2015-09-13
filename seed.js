// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

//user seed data;

// it: aaaahhh, do not hardcode `_id`, `passwordDigest`, or `createdAt` they should all be dynamic!
var users_list =[
	{
		_id: "55e76cc4ed7b8c9e09924daa",
		email: "jamie@ga.co",
		passwordDigest: "$2a$10$9Hmt9l2iOZgNLi4C/GeoOeyMDRd.OUrFBz.s0NpvXJHVv.dY2I8N6",
		__v: 0,
		createdAt: "2015-09-02T21:40:20.969Z",
		drinks: [
					{
						drinkName: "Moscow Mule",
						image: "http://i.share.pho.to/376a7204_o.png",
						feeling: "relaxed",
						ingredients: ["2 oz Vodka", "3 oz Ginger beer", "Juice from half a lime", "1 Lime wheel"],
						instructions: "Add all the ingredients to a Moscow Mule mug or highball glass filled with ice and garnish with a lime wheel."
					},
						{
							drinkName: "Bloody Mary",
							image: "http://i.share.pho.to/b713b753_o.png",
							feeling: "zany",
							ingredients: [ "1 Lemon wedge", "1 Lime wedge" ,"2 oz Premium Vodka", "4 oz Tomato juice", "2 dashes Tabasco Sauce", "2 tsp Prepared horseradish", "2 tsp Worcesthershire sauce", "1 pinch celery salt", "1 pinch Ground black pepper", "1 pinch Smoked Paprika", "1 Celery stick"],
							instructions: "Pour some celery salt onto a small plate. Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. Roll the outer edge of the glass in celery salt until fully coated. Fill with ice and set aside. Squeeze the lemon and lime wedges into a shaker and drop them in. Add the remaining ingredients and fill with ice. Shake gently and strain into the prepared glass. Garnish with a celery stalk and a lime wedge."
							

						}
				]
	},
	{
		_id: "55e7ea2f6c03afc5262a0a6e",
		email: "beau@ga.co",
		passwordDigest: "$2a$10$Zt5pZLXNH7ajTaKOZ2GUL.6zffwXbzEXADAVh0swvRwncH1G8MZjS",
		__v: 0,
		createdAt: "2015-09-03T06:35:27.974Z",
		drinks: [
					{
						drinkName: "Moscow Mule",
						image: "http://i.share.pho.to/376a7204_o.png",
						feeling: "relaxed",
						ingredients: ["2 oz Vodka", "3 oz Ginger beer", "Juice from half a lime", "1 Lime wheel"],
						instructions: "Add all the ingredients to a Moscow Mule mug or highball glass filled with ice and garnish with a lime wheel."
					},
					{
						drinkName: "Bloody Mary",
						image: "http://i.share.pho.to/b713b753_o.png",
						feeling: "zany",
						ingredients: [ "1 Lemon wedge", "1 Lime wedge" ,"2 oz Premium Vodka", "4 oz Tomato juice", "2 dashes Tabasco Sauce", "2 tsp Prepared horseradish", "2 tsp Worcesthershire sauce", "1 pinch celery salt", "1 pinch Ground black pepper", "1 pinch Smoked Paprika", "1 Celery stick"],
						instructions: "Pour some celery salt onto a small plate. Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. Roll the outer edge of the glass in celery salt until fully coated. Fill with ice and set aside. Squeeze the lemon and lime wedges into a shaker and drop them in. Add the remaining ingredients and fill with ice. Shake gently and strain into the prepared glass. Garnish with a celery stalk and a lime wedge."
						

					}
		]
	},
	{
		_id: "55ef2d2c483f5cf4208e86f0",
		email: "john@ga.co",
		passwordDigest: "$2a$10$72qIfb.XbmZAvEpC59RbOuaUULbbuSCyeFBuBdawdBwJbGYUREXrm",
		__v: 0,
		createdAt: "2015-09-08T18:44:51.361Z",
		drinks: [
					{
						drinkName: "Moscow Mule",
						image: "http://i.share.pho.to/376a7204_o.png",
						feeling: "relaxed",
						ingredients: ["2 oz Vodka", "3 oz Ginger beer", "Juice from half a lime", "1 Lime wheel"],
						instructions: "Add all the ingredients to a Moscow Mule mug or highball glass filled with ice and garnish with a lime wheel."
					},
					{
						drinkName: "Bloody Mary",
						image: "http://i.share.pho.to/b713b753_o.png",
						feeling: "zany",
						ingredients: [ "1 Lemon wedge", "1 Lime wedge" ,"2 oz Premium Vodka", "4 oz Tomato juice", "2 dashes Tabasco Sauce", "2 tsp Prepared horseradish", "2 tsp Worcesthershire sauce", "1 pinch celery salt", "1 pinch Ground black pepper", "1 pinch Smoked Paprika", "1 Celery stick"],
						instructions: "Pour some celery salt onto a small plate. Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. Roll the outer edge of the glass in celery salt until fully coated. Fill with ice and set aside. Squeeze the lemon and lime wedges into a shaker and drop them in. Add the remaining ingredients and fill with ice. Shake gently and strain into the prepared glass. Garnish with a celery stalk and a lime wedge."
						

					}

		]
	},
	{
		_id: "55ed39c463846a3e120eb890",
		email: "alice@ga.co",
		passwordDigest: "$2a$10$v/DALsucCd/rjlmiB5AJwOMK898oNBdqUpS2l/i9hFkqWfssQoXCO",
		__v: 0,
		createdAt: "2015-09-07T07:16:03.911Z",
		drinks: [
					{
						drinkName: "Moscow Mule",
						image: "http://i.share.pho.to/376a7204_o.png",
						feeling: "relaxed",
						ingredients: ["2 oz Vodka", "3 oz Ginger beer", "Juice from half a lime", "1 Lime wheel"],
						instructions: "Add all the ingredients to a Moscow Mule mug or highball glass filled with ice and garnish with a lime wheel."
					},
					{
						drinkName: "Bloody Mary",
						image: "http://i.share.pho.to/b713b753_o.png",
						feeling: "zany",
						ingredients: [ "1 Lemon wedge", "1 Lime wedge" ,"2 oz Premium Vodka", "4 oz Tomato juice", "2 dashes Tabasco Sauce", "2 tsp Prepared horseradish", "2 tsp Worcesthershire sauce", "1 pinch celery salt", "1 pinch Ground black pepper", "1 pinch Smoked Paprika", "1 Celery stick"],
						instructions: "Pour some celery salt onto a small plate. Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. Roll the outer edge of the glass in celery salt until fully coated. Fill with ice and set aside. Squeeze the lemon and lime wedges into a shaker and drop them in. Add the remaining ingredients and fill with ice. Shake gently and strain into the prepared glass. Garnish with a celery stalk and a lime wedge."
						

					}

		]
	},
];



db.User.remove({}, function(err, users){

  db.User.create(users_list, function(err, users){
    if (err) { return console.log(err) };
    console.log("created", users.length, "users")
    process.exit();
  })

});

var drinks_list = [
	{
		drinkName: "Mint Julep",
		image: "http://i.share.pho.to/cfcfe866_o.png",
		feeling: "happy",
		ingredients: [".25 oz Raw sugar syrup", "8 Mint leaves", "2 oz Bourbon", "Bitters", "1 Mint sprig"],
		instructions: "In a Julep cup or rocks glass, lightly muddle the mint and syrup. Add the bourbon and pack tightly with crushed ice. Stir until the cup is frosted on the outside. Top with more crushed ice to form an ice dome and garnish with a few drops of bitters, if desired, and a mint sprig."
	},
	{
		drinkName: "Mojito",
		image: "http://i.share.pho.to/bc5353e5_o.png",
		feeling: "happy",
		ingredients: ["6 Mint leaves", ".75 oz Simple syrup", ".75 oz Fresh lime juice", "1.5 oz White rum", "1.5 oz Club soda", "1 Mint sprig"],
		instructions: "In a shaker, lightly muddle the mint. Add the simple syrup, lime juice and rum, and fill with ice. Shake well and pour (unstrained) into a highball glass. Top with the club soda and garnish with a mint sprig."
	},
		{
		drinkName: "Gimlet",
		image: "http://i.share.pho.to/e077c2ae_o.png",
		feeling: "happy",
		ingredients: ["2.5 oz Gin", ".5 oz Lime juice", ".5 oz Simple syrup", "1 Lime wheel"],
		instructions: "Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice. Garnish with a lime wheel. (You can substitute 1 oz lime cordial, such as Rose's Lime Juice, for both the lime juice and simple syrup)."
	},
	{
		drinkName: "White Russian",
		image: "http://i.share.pho.to/160dca1e_o.png",
		feeling: "sleepy",
		ingredients: ["2 oz Vodka", "1 oz Kahlua", "1 oz Heavy cream"],
		instructions: "Add the vodka and Kahlúa to an Old Fashioned glass filled with ice. Top with a large splash of heavy cream and stir."
	},
	{
		drinkName: "Hot Toddy",
		image: "http://i.share.pho.to/8959b5be_o.png",
		feeling: "sleepy",
		ingredients: ["Boiling water", "4 Cloves", "1 Lemon Twist", "2 tsp Brown sugar", ".25 oz Lemon juice", "2 oz Bourbon, rye whiskey, Irish whiskey, or Scotch"],
		instructions: "Fill a mug with boiling water and let stand for a minute or two to warm. Meanwhile, stick the cloves into the lemon twist and set aside. Empty the mug and fill about halfway with fresh boiling water. Add the sugar and stir to dissolve. Add the prepared lemon twist and stir. Add the lemon juice and whiskey, and stir again."
	},
		{
		drinkName: "Eggnog",
		image: "http://i.share.pho.to/a270c5c7_o.png",
		feeling: "sleepy",
		ingredients: ["6 Eggs separated", ".75 cop Sugar, divided", "32 oz Whole milk", "16 oz Heavy cream", "8 oz Bourbon", "4 oz Spiced rum"],
		instructions: "In a large bowl, beat together the egg yolks and half a cup of sugar until they turn light in color. Stir in the milk, heavy cream, bourbon and rum. In a separate bowl, beat the egg whites with the remaining quarter-cup of sugar until they form soft peaks. Fold about a third of the egg whites into the yolk mixture. Serve in punch or tea cups topped with freshly grated nutmeg, folding in more of the egg whites as desired."
	},
	{
		drinkName: "Manhattan",
		image: "http://i.share.pho.to/e295c6bd_o.png",
		feeling: "fancy",
		ingredients: ["2 oz Rye Whiskey", "1 oz Sweet vermouth", "5 drops Angostura", "Bitters"],
		instructions: "Add all the ingredients to a mixing glass and fill with ice. Stir well and strain into a chilled cocktail glass. Garnish with a cherry."
	},
	{
		drinkName: "Vesper",
		image: "http://i.share.pho.to/e05f6bb4_o.png",
		feeling: "fancy",
		ingredients: ["3 oz Plymouth Gin", "1 oz Absolut Vodka", ".5 oz Lillet Blanc", "1 Lemon peel"],
		instructions: "Add all the ingredients to a mixing glass and fill with ice. Stir, and strain into a chilled cocktail glass. Twist a slice of lemon peel over the drink, rub along the rim of the glass and drop it in."
	},
		{
		drinkName: "Tom Collins",
		image: "http://i.share.pho.to/bb31b927_o.png",
		feeling: "fancy",
		ingredients: [".75 oz Fresh lemon juice", ".75 oz Simple syrup", "1.5 oz Gin", "Club soda", "Lemon wheel", "Cherry"],
		instructions: "Add the lemon juice, simple syrup and gin to a shaker and fill with ice. Shake well and strain into a highball or Collins glass filled with fresh ice. Top with club soda and garnish with a lemon wheel and a cherry."
	},
	{
		drinkName: "Bloody Mary",
		image: "http://i.share.pho.to/b713b753_o.png",
		feeling: "zany",
		ingredients: [ "1 Lemon wedge", "1 Lime wedge" ,"2 oz Premium Vodka", "4 oz Tomato juice", "2 dashes Tabasco Sauce", "2 tsp Prepared horseradish", "2 tsp Worcesthershire sauce", "1 pinch celery salt", "1 pinch Ground black pepper", "1 pinch Smoked Paprika", "1 Celery stick"],
		instructions: "Pour some celery salt onto a small plate. Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. Roll the outer edge of the glass in celery salt until fully coated. Fill with ice and set aside. Squeeze the lemon and lime wedges into a shaker and drop them in. Add the remaining ingredients and fill with ice. Shake gently and strain into the prepared glass. Garnish with a celery stalk and a lime wedge."
	},
	{
		drinkName: "Pina Colada",
		image: "http://i.share.pho.to/4ccbc239_o.png",
		feeling: "zany",
		ingredients: ["1.5 oz Light or gold rum", "2 oz Coconut milk", "2 oz Fresh pineapple juice","Cherry","Pineapple wedge"],
		instructions: "To make the Piña Colada add all the ingredients to a shaker and fill with ice. Shake, and strain into a Hurricane glass filled with fresh ice. (You may also blend all the ingredients with crushed ice instead.) Garnish with a cherry and a pineapple wedge."
	},
	{
		drinkName: "Margarita",
		image: "http://i.share.pho.to/0ea5311a_o.png",
		feeling: "zany",
		ingredients: [".75 oz Freshly squeezed lime juice", "1 oz Orange liqueur", "1.5 oz Blanco tequila", "Kosher salt", "1 Lime wheel"],
		instructions: "Add the ingredients to a shaker and fill with ice. Shake well and strain into a chilled cocktail glass or rocks glass filled with fresh ice. Garnish with a lime wheel. For a slightly sweeter drink, add a dash of agave syrup (one part water, two parts agave nectar) before shaking.)."
	},
	{
		drinkName: "Mimosa",
		image: "http://i.share.pho.to/60cc961a_o.png",
		feeling: "romantic",
		ingredients: ["2 oz Orange Juice", "Sparkling wine"],
		instructions: "Add the orange juice to a Champagne flute. Fill with sparkling wine."
	},
	{
		drinkName: "French 75",
		image: "http://i.share.pho.to/a18ddd84_o.png",
		feeling: "romantic",
		ingredients: [".5 oz Lemon juice", ".5 oz Simple syrup", "1 oz Gin", "3 oz Champagne"],
		instructions: "Add all the ingredients except the Champagne to a shaker and fill with ice. Shake well and strain into a Champagne flute. Top with the Champagne and garnish with a lemon twist."
	},
	{
		drinkName: "Vieux Carre",
		image: "http://i.share.pho.to/c78c6a40_o.png",
		feeling: "romantic",
		ingredients: [".75 oz Angel's Envy Rye whiskey", ".75 oz Cognac", ".75 oz Martini sweet Vermouth", "1 tsp Benedictine", "2 dashes Peychaud's Bitters", "2 dashes Angostura bitters"],
		instructions: "Add all the ingredients to a rocks glass. Fill with ice and stir."
	},
	{
		drinkName: "Corpse Reviver No. 2",
		image: "http://i.share.pho.to/8ea30611_o.png",
		feeling: "adventurous",
		ingredients: ["Absinthe", ".75 oz Plymouth Gin", ".75 oz Cointreau", ".75oz Lillet Blanc", ".75 oz Lemon juice"],
		instructions: "Rinse a chilled coupe or Martini glass with absinthe and set aside. Add the remaining ingredients to a shaker and fill with ice. Shake, and strain into the prepared glass."
	},
	{
		drinkName: "Blood & Sand",
		image: "http://i.share.pho.to/7c72cea2_o.png",
		feeling: "adventurous",
		ingredients: [".75 oz Scotch Whisky", ".75 oz Sweet vermouth", ".75 oz Cherry Heering", ".75 oz Orange Juice"],
		instructions: "Add all the ingredients to a shaker and fill with ice. Shake, and strain into a chilled coupe or cocktail glass. Garnish with an orange peel."
	},
	{
		drinkName: "Pisco Sour",
		image: "http://i.share.pho.to/9ab1936d_o.png",
		feeling: "adventurous",
		ingredients: ["2 oz Pisco Barsol Quebranta", "1 oz Fresh lime juice", ".5 oz Simple syrup", "1 Fresh egg white", "Angostura bitters"],
		instructions: "Add all the ingredients to a shaker and fill with ice. Shake vigorously and strain into a highball glass or Champagne flute. Garnish with a lime wheel and 3 gentle drops of Angostura Bitters, which will settle in the foam of the cocktail. Using a straw, swirl the bitters into a simple design."
	},
	{
		drinkName: "Michelada",
		image: "http://i.share.pho.to/6c1b6ddd_o.png",
		feeling: "relaxed",
		ingredients: ["Salt", "Cayenne pepper", ".5 0z Lime juice", "2 drops Tabasco Sauce", "2 dashes Worcestershire sauce" ,"1 pinch Ground black pepper", "1 pinch Ground black pepper", "1 pinch Celery salt", "Mexican lager beer", "1 Lime wedge"],
		instructions: "Rub the lime wedge along half the rim of the pint glass and dip into a mix of equal parts salt and Cayenne pepper. Add the remaining ingredients except the beer. Fill with beer and garnish with a fresh lime wedge."
	},
	{
		drinkName: "Moscow Mule",
		image: "http://i.share.pho.to/376a7204_o.png",
		feeling: "relaxed",
		ingredients: ["2 oz Vodka", "3 oz Ginger beer", "Juice from half a lime", "1 Lime wheel"],
		instructions: "Add all the ingredients to a Moscow Mule mug or highball glass filled with ice and garnish with a lime wheel."
	},
	{
		drinkName: "Whiskey Smash",
		image: "http://i.share.pho.to/1a688995_o.png",
		feeling: "relaxed",
		ingredients: ["half Lemon", "4 Mint leaves", ".75 oz Simple syrup", "2 oz Bourbon"],
		instructions: "In a shaker, muddle the lemon. Add the remaining ingredients and fill with ice. Shake, and double-strain into a rocks glass filled with crushed ice or one large ice chunk. Slap a mint sprig between your hands and use as garnish. Serve with a straw."
	},
	{
		drinkName: "Old Fashioned",
		image: "http://i.share.pho.to/ac859d26_o.png",
		feeling: "pensive",
		ingredients: ["1 Brown sugar cube", ".5 tsp White sugar", "3 dashes Angostura bitters", "1 dash Orange bitters", ".25 oz Cold water", "2 oz Whiskey", "Lemon", "Orange Twists"],
		instructions: "Add all the ingredients to a mixing glass. Muddle to break down the sugar and stir briefly. Fill with ice, stir again and strain into a rocks glass filled with fresh ice. Twist slices of lemon and orange peel over the drink and drop them in."
	},
	{
		drinkName: "Negroni",
		image: "http://i.share.pho.to/cfd799c4_o.png",
		feeling: "pensive",
		ingredients: ["1 oz Campari", "1 oz Gin", "1 oz Sweet vermouth", "1 Orange half-wheel"],
		instructions: "Add all the ingredients to an Old Fashioned glass and fill with ice. Stir until cold and garnish with an orange half-wheel."
	},
	{
		drinkName: "Dark N Stormy",
		image: "http://i.share.pho.to/9b0d2525_o.png",
		feeling: "pensive",
		ingredients: ["1.5 oz Rum", "Ginger Beer"],
		instructions: "Fill a tall glass with ice and add the rum. Top with ginger beer. Garnish with a lime wedge."
	}
];

db.Drink.remove({}, function(err, users){

  db.Drink.create(drinks_list, function(err, drinks){
    if (err) { return console.log(err) };
    console.log("created", drinks.length, "drinks")
    process.exit();
  })

});

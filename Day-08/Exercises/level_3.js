import { users, products } from "./required_files/objects_2_3.js";

const randomId = () => {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id
}

const showDateTime = () => {
    let date = new Date();
    const formatter = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    return formatter;
}
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Miguel',
    lastName: 'Duran',
    incomes: [
        { description: 'Work', amount: 4500 },
        { description: 'Bonuses', amount: 900 },
    ],
    expenses: [
        { description: 'Home', amount: 2000 },
    ],
    totalIncome: () => {
        return this.incomes.reduce((acc, cur) => acc += cur.amount, 0)
    },
    totalExpense: () => {
        return this.expenses.reduce((acc, cur) => acc += cur.amount, 0)
    },
    accountInfo: () => {
        return `The user ${this.firstName} ${this.lastName} has incomes of ${this.totalIncome} and expenses of ${this.totalExpense}`;
    },
    addIncome: (description, amount) => {
        return this.incomes.push({ description, amount });
    },
    addExpense: (description, amount) => {
        return this.expenses.push({ description, amount });
    },
    accountBalance: () => {
        return this.totalIncome() - this.totalExpense();
    }
};
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
/**
 * Imagine you are getting the above users collection from a MongoDB database. 
 * a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
 * b. Create a function called signIn which allows user to sign in to the application
*/
const inputData = (user) => {
    const username = user;
    const emailInput = 'email';
    const passwordInput = 'password';
    users.push({
        _id: randomId(),
        username: username,
        email: emailInput,
        password: passwordInput,
        createdAt: showDateTime().toString(),
        isLoggedIn: false
    });
    return users;
};

const signUp = (username) => {
    const user = username;
    const existingUser = users.find(existingUser => existingUser.username === user);
    if (existingUser) {
        return `The user ${user} already has a registered user account`;
    }
    return inputData(user);
};
console.log('2. - ', signUp('vegadevh'));

/** The products array has three elements and each of them has six properties.
 * a. Create a function called rateProduct which rates the product
 * b. Create a function called averageRating which calculate the average rating of a product
*/

const rateProduct = (name, userId, rate) => {
    const product = products.find(productName => productName.name === name);
    if (product) {
        product.ratings.push({ userId: userId, rate: rate });
        return product;
    } else {
        return `The product ${name} doesn't exists.`;
    }
};

console.log('3.a. - ', rateProduct('Laptop', randomId(), '2.5'));

const averageRating = () => {
    let productsRated = [];
    products.forEach(product => {
        const productName = product.name;
        let totalRate = 0;
        let rates = product.ratings.length;
        product.ratings.forEach(rating => {
            totalRate += rating.rate;
        })
        productsRated.push({ name: productName, rate: rates !== 0 ? totalRate / rates : 0 });
    });
    return productsRated;
};
console.log('3.b. - ', averageRating());

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (name) => {
    const product = products.find(product => product.name === name);
    if (product) {
        if (product.likes.length !== 0) {
            product.likes = [];
        } else {
            product.likes.push(randomId());
        }
        return product;
    } else {
        return `The product ${name} doesn't exists.`;
    };
};

console.log('4. - ', likeProduct('Laptop')); //MUST RETURN EMPTY LIKES ARRAY
console.log('4. - ', likeProduct('mobile phone')); //MUST RETURN LIKES ARRAY WITH AN ELEMENT
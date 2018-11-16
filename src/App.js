import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksApp extends React.Component {

    // sample data
    state = {
        currentlyReading:[
            {
            "title": "ACSM Fitness Book",
            "authors": [
                "American College of Sports Medicine"
            ],
            "publisher": "Human Kinetics",
            "publishedDate": "2003",
            "description": "Start where you are and go wherever your goals take you. No other guide offers a more comprehensive plan for developing a personal fitness program and sticking with it. Developed by the American College of Sports Medicine, ACSM Fitness Bookoffers the total package from one of the most respected organizations in the field. In its first two editions, the ACSM Fitness Booksold more than 100,000 copies. Now the classic has been enhanced and expanded with the tools you need to succeed. From simple, step-by-step instruction to new insights on nutrition, weight control, motivation, and overcoming setbacks, the authors provide the help you need to reach beyond your personal best. The key to making any fitness program effective is finding the right level of difficulty for your current ability and creating a plan that will take you to the next level. With a simple and scientifically proven fitness test, the ACSM Fitness Bookgives you everything you need to determine your starting point and monitor your ongoing progress. With sample programs, worksheets, and more, ACSM Fitness Booktakes the guesswork out of getting started and offers color photos of a variety of exercises that require minimal equipment and space. Whether your objective is to improve cardiovascular endurance, muscular strength, flexibility, or overall body condition, the ACSM Fitness Bookwill lay out a proven plan for reaching your goal in a way that works for you. Richly illustrated and easy to follow, it is the one book you need for the tools, and the motivation, to put your personal fitness program on track.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "073604406X"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780736044066"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 175,
            "printType": "BOOK",
            "categories": [
                "Health & Fitness"
            ],
            "averageRating": 5,
            "ratingsCount": 1,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.4.1.0.preview.1",
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=qpdRgb9X3EcC&printsec=frontcover&dq=fitness&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=qpdRgb9X3EcC&dq=fitness&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/ACSM_Fitness_Book.html?hl=&id=qpdRgb9X3EcC",
            "id": "qpdRgb9X3EcC"
            },
            {
                "title": "Fitness!",
                "authors": [
                    "Karen Mazzeo",
                    "Lauren Mangili"
                ],
                "publisher": "Cengage Learning",
                "publishedDate": "2012-02-03",
                "description": "Cengage Learning Activity Series From aerobics and yoga to bowling, tennis, weight training, and more. Cengage Learning offers a complete line of activities texts to meet your teaching needs. Written for individuals of all skill levels and backgrounds, the Cengage Learning Activity Series goes beyond the mere fundamentals, showing students how to improve, excel, and simply get more enjoyment from their favorite physical activities. FITNESS THROUGH AEROBICS, STEP TRAINING, AND WALKING, Fifth Edition, uses an easy-to-follow sequential learning order that provides methods to achieve total fitness goals. The text covers the principles and techniques of aerobic dance exercise, step training, and fitness walking, with a new focus on strength training. Students will be able to structure a complete physical and mental training program that can work for a lifetime. Important Notice: Media content referenced within the product description or the product text may not be available in the ebook version.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780840048097"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0840048092"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 272,
                "printType": "BOOK",
                "categories": [
                    "Medical"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=zpQ4Vv30fAgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=zpQ4Vv30fAgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=zpQ4Vv30fAgC&printsec=frontcover&dq=fitness&hl=&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=zpQ4Vv30fAgC&dq=fitness&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Fitness.html?hl=&id=zpQ4Vv30fAgC",
                "id": "zpQ4Vv30fAgC"
            },
            {
                "title": "Barre Fitness",
                "subtitle": "Barre Exercises You Can Do Anywhere for Flexibility, Core Strength, and a Lean Body",
                "authors": [
                    "Fred DeVito",
                    "Elisabeth Halfpapp"
                ],
                "publisher": "Fair Winds Press (MA)",
                "publishedDate": "2015-11-15",
                "description": "Barre Fitness provides 100 at-home barre exercises from the fundamentals to more complex moves with a focus on building strength and improving technique--no barre required!",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781592336913"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1592336914"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 176,
                "printType": "BOOK",
                "categories": [
                    "Health & Fitness"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=LKWSCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=LKWSCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=LKWSCgAAQBAJ&printsec=frontcover&dq=fitness&hl=&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=LKWSCgAAQBAJ&dq=fitness&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Barre_Fitness.html?hl=&id=LKWSCgAAQBAJ",
                "id": "LKWSCgAAQBAJ"
            },
        ],
        wantToRead:[
            {
                "title": "Fitness and Health",
                "authors": [
                    "Brian J. Sharkey",
                    "Steven E. Gaskill"
                ],
                "publisher": "Human Kinetics",
                "publishedDate": "2007",
                "description": "This book explains in plain English how the body responds to physical activity, why physical activity is so important to health, and how best to become physically active. You'll learn how to create programs to improve your aerobic fitness; increase your muscular strength, endurance, and flexibility; control your diet and weight; and improve your performance at work and in sports. With more than 100,000 copies sold, this classic reference (formerly titled Physiology of Fitness) is your source for accurate and insightful information. Now updated and redesigned, this comprehensive text will show you how to improve and maintain your health through regular and enjoyable physical activity.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0736056149"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780736056144"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 429,
                "printType": "BOOK",
                "categories": [
                    "Health & Fitness"
                ],
                "averageRating": 4,
                "ratingsCount": 3,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "2.3.0.0.preview.1",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=iyn4xULK4JUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=iyn4xULK4JUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=iyn4xULK4JUC&printsec=frontcover&dq=fitness&hl=&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=iyn4xULK4JUC&dq=fitness&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Fitness_and_Health.html?hl=&id=iyn4xULK4JUC",
                "id": "iyn4xULK4JUC"
            },
            {
                "title": "Fitness Walking 2nd Editon",
                "publisher": "Human Kinetics",
                "publishedDate": "1995",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1450408583"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781450408585"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 160,
                "printType": "BOOK",
                "averageRating": 3,
                "ratingsCount": 2,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=GSbaYnBTFtsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=GSbaYnBTFtsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=GSbaYnBTFtsC&printsec=frontcover&dq=fitness&hl=&cd=5&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=GSbaYnBTFtsC&source=gbs_api",
                "canonicalVolumeLink": "https://market.android.com/details?id=book-GSbaYnBTFtsC",
                "id": "GSbaYnBTFtsC"
            },
            {
                "title": "Fitness for Work",
                "subtitle": "The Medical Aspects",
                "authors": [
                    "Keith T Palmer",
                    "Ian Brown",
                    "John Hobson"
                ],
                "publisher": "OUP Oxford",
                "publishedDate": "2013-01-24",
                "description": "The 'bible' of occupational health, Fitness for Work is the most in-depth and comprehensive resource available on the effects of ill health on employment. Expert authors provide practical guidance on the employment potential of anyone with an illness or disability, as well as examining the art and skills of fitness for work assessment and its ethical framework. Fully revised and updated, Fitness for Work, fifth edition now includes, for the first time, important new chapters on work in cancer survivors, health promotion in the workplace, and managing and avoiding sickness absence. Following in the all-encompassing and comprehensive tradition of the previous editions, it also continues to provide coverage of and information on support for rehabilitation, work at older ages, health screening, and the full array of medical and surgical health problems that can affect fitness for work. Chapters are organized by medical condition to enable effortless reference, and are co-authored by a topic specialist and a specialist occupational physician providing a comprehensive view of the subject. The latest developments in legislation and government guidelines are included ensuring the book is up-to-date and provides the most current procedures in the field. Fitness for Work delivers a wealth of valuable consensus guidance, codes of practice, and locally evolved standards to enable well-informed clinical judgements to be made. All occupational health professionals should have a copy of this highly-regarded resource on their desks.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780191663888"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0191663883"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 736,
                "printType": "BOOK",
                "categories": [
                    "Medical"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "3.5.7.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=Du_mTZwlWRUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=Du_mTZwlWRUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=Du_mTZwlWRUC&printsec=frontcover&dq=fitness&hl=&cd=6&source=gbs_api",
                "infoLink": "https://play.google.com/store/books/details?id=Du_mTZwlWRUC&source=gbs_api",
                "canonicalVolumeLink": "https://market.android.com/details?id=book-Du_mTZwlWRUC",
                "id": "Du_mTZwlWRUC"
            },
        ],
        read:[
            {
                "title": "Practical Fitness Testing",
                "subtitle": "Analysis in Exercise and Sport",
                "authors": [
                    "Morc Coulson",
                    "David Archer"
                ],
                "publisher": "A&amp;C Black",
                "publishedDate": "2009-09-01",
                "description": "A comprehensive and up to date guide to testing fitness, ideal for coaches, fitness industry professionals and anyone planning a training program for clients or groups.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781408110225"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1408110229"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 256,
                "printType": "BOOK",
                "categories": [
                    "Sports & Recreation"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "3.20.0.0.preview.1",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=YrBpH8l9RMoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=YrBpH8l9RMoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=YrBpH8l9RMoC&printsec=frontcover&dq=fitness&hl=&cd=7&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=YrBpH8l9RMoC&dq=fitness&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Practical_Fitness_Testing.html?hl=&id=YrBpH8l9RMoC",
                "id": "YrBpH8l9RMoC"
            },
            {
                "title": "Yoga for Fitness and Wellness",
                "authors": [
                    "Ravi Dykema"
                ],
                "publisher": "Cengage Learning",
                "publishedDate": "2011-01-01",
                "description": "Cengage Learning Activity Series From aerobics and yoga -- to bowling, tennis, weight training, and more -- Cengage Learning offers a complete line of activities texts to meet your teaching needs. Written for individuals of all skill levels and backgrounds, the Cengage Learning Activity Series goes beyond the mere fundamentals, showing students how to improve, excel, and simply get more enjoyment from their favorite physical activities. YOGA FOR FITNESS AND WELLNESS, 2nd Edition, introduces students to the ancient practice of yoga. Covering the history and philosophy of yoga and the theories of Hatha Yoga specifically, the text also explores yoga exercises, including breathing, stretching and strengthening, and relaxation and meditation. Important Notice: Media content referenced within the product description or the product text may not be available in the ebook version.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780840048110"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0840048114"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 192,
                "printType": "BOOK",
                "categories": [
                    "Health & Fitness"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.1.0.preview.1",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=DuYgIFkhBsQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=DuYgIFkhBsQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=DuYgIFkhBsQC&printsec=frontcover&dq=fitness&hl=&cd=8&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=DuYgIFkhBsQC&dq=fitness&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Yoga_for_Fitness_and_Wellness.html?hl=&id=DuYgIFkhBsQC",
                "id": "DuYgIFkhBsQC"
            },
            {
                "title": "Health Fitness Management",
                "subtitle": "A Comprehensive Resource for Managing and Operating Programs and Facilities",
                "authors": [
                    "Mike Bates"
                ],
                "publisher": "Human Kinetics",
                "publishedDate": "2008",
                "description": "\"Health Fitness Management, Second Edition,\" provides an in-depth picture of the energetic, varied, and rewarding role of the health and fitness club manager. With contributions from leading experts in the fitness industry and several new chapters, this second edition is the most authoritative and field-tested guide to management success.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "073606205X"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780736062053"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 381,
                "printType": "BOOK",
                "categories": [
                    "Business & Economics"
                ],
                "averageRating": 3,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=m5X9PUlOZcEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=m5X9PUlOZcEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=m5X9PUlOZcEC&printsec=frontcover&dq=fitness&hl=&cd=9&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=m5X9PUlOZcEC&dq=fitness&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Health_Fitness_Management.html?hl=&id=m5X9PUlOZcEC",
                "id": "m5X9PUlOZcEC"
            },
        ]
        
    }

    moveBook = (newShelf, oldShelf, theBook) => {
        console.log("App.moveBook(): The arguments are: ", newShelf, oldShelf, theBook);
        // If the old shelf is not the search page or the new shelf (you can't move a book from its own shelf to its own shelf), then use filter() to filter out the book we're moving and re-set the state of the old shelf
        if (oldShelf !== "search" && oldShelf !== newShelf) {
            this.setState(
                { 
                    [oldShelf]: this.state[oldShelf].filter(v => v !== theBook),
                }
            );
        }
        // If the new shelf is not "none" and is not the old shelf (you can't move a book from its own shelf to its own shelf), then, in an immediately invoked function,  use push to push the book we're moving onto the new shelf and then return the new shelf, so that we can re-set its state. I used the IIF because I wanted to make sure that when I returned the new shelf, it included the newly added book and I wasn't sure if it would otherwise.
        
        // Right now I'm a bit confused by the way that React would like to handle selected options. What you're supposed to do is create a state that represents the selected state for the options, and then you set the select elements value attribute to whatever that state is. The onchange event triggers the change in state. I think I can do that in the shelf changer component and it will have no effect on this method
        if (newShelf !== "none" && newShelf !== oldShelf) {
            this.setState(
                {
                    [newShelf]: (() => {
                        console.log("From inside setState in moveBook, this.state[newShelf] is ", this.state[newShelf])
                        this.state[newShelf].push(theBook);
                        return this.state[newShelf];
                        })(),
                }
            );
        } 
    }

    render() {


        return (
            <Switch>
                <Route
                    exact path="/search"
                    render={(props) => <Search {...props} library={this.state} cb={this.moveBook} />}
                />
                <Route
                    exact path="/"
                    render={(props) => <ListBooks {...props} library={this.state} cb={this.moveBook} />}
                />
            </Switch>
            
        );
    }

}

export default BooksApp;

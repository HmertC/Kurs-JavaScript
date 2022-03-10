// function that return
function Question(hobby) {
    switch(hobby){
        case 'car':
            return function (name) {
                    console.log(name + ' do you have a car?');
            }
            break;

            case 'book':
                return function (name) {
                    console.log(name + ' what is your favorite book');
            }
                break;
                
        case 'software':

            return function (name,type) {
                console.log(name + ' are you interested ' +type+ ' ? ');
        }
          break;
            default:
                return function (name) {
                    console.log(name + ' How are you?');
            }
    }
}


var carQuestion = Question('car');

carQuestion('cabbar');
carQuestion('rezzak');

var bookQuestion = Question('book');

bookQuestion('muttalip');
bookQuestion('Haydar');

var softwareQuestion = Question('software');

softwareQuestion('Hanzo','nodejs');
softwareQuestion('Peşto','angular');

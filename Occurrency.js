/*
 *
 * Get occurence of each word in a text
 * 
 * Author : Alexandre SIMONIN
 * Created : 14/04/2018
 *
 */


function Occurrency(options) {
    // 0. Init
    var customAppend = false,
        limit = 2;
    if (typeof options.customAppend !== 'undefined') {
        customAppend = options.customAppend;
    }
    if (typeof options.limit !== 'undefined') {
        limit = options.limit;
    }

    // 1. Get the text
    var target = options.text;
    var text = document.getElementById(target).innerHTML;

    // 2. Clean text
    var cleanText = this.cleanText(text);

    // 3. Transform the text into array of words
    var array = cleanText.split(" ");

    // 4. Replace all apostrophe by space expect if its place is in the middle of the word (aujourd'hui)
    var cleanArray = this.checkApostrophe(array);

    // 5. Get occurences of each words and push its into object
    var result = this.countOccurences(cleanArray, limit);

    // 6. Append result in front
    var id = options.result;
    if(customAppend === false) {
        var div = document.createElement("div");
        div.setAttribute("id", id);   
        document.body.appendChild(div);
    }
    let render = document.getElementById(id);
    render.innerHTML += "<ul>";
    for (var key in result) {
        render.innerHTML += '<li style="display: inline-block; background-color: #a5c7d8; color: #000; list-style: none; padding: 10px; margin: 2px;">' + key + ' : ' + result[key] + '</li>';
    }
    render.innerHTML += "</ul>";
}


/*
 * Function cleanText
 * parameter : text
 * return : text
 */
function cleanText(text) {
    let cleanText = "";
    
    // Transform text in lowercase
    cleanText = text.toLowerCase();

    // Clean whitespaces
    cleanText = cleanText.trim();

    // Delete all useless character
    cleanText = cleanText.replace(/[\.,:;!?()"]+/g, '');

    return cleanText;
}

/*
 * Function checkApostrophe
 * parameter : array
 * return : array
 */
function checkApostrophe(array) {
    array.forEach(function(element, index) {
        //console.log(element+" : "+element.indexOf('\''));
        if (element.indexOf('\'') == 1) {
            //console.log('index: '+index);
            var tmp = element.replace(/'/g, '');
            array[index] = tmp.substr(1);
        }
    });
    return array;
}


/*
 * Function countOccurences
 * parameter : array
 * return : object
 */
function countOccurences(array, limit) {
    var result = {};
    array.forEach(function(element) {
        // Check if word has 2 letters or more
        if(element.length >= limit) {
            if(element in result) {
                // Increment if the word is already in the object
                result[element] = ++result[element];
            } else {
                // Push the word in the object
                result[element] = 1;
            }
        }
    });
    return result;
}


var Friends = {
    Sarah: {
        age: 34,
        met: 1991,
        funFact: "She\'s my sister!"
    },
    Nick: {
        age: 26,
        met: 2022,
        funFact: "He sold me a laptop at below market value!"
    },
    Cliff : {
        age: 23,
        met: 2022,
        funFact: "Good at tennis!"
    }
};

function changeText(friendName) {
    var friend = Friends[friendName];
    var details = `<h2>${friendName}</h2>
                   <p>Age: ${friend.age}</p>
                   <p>Met: ${friend.met}</p>
                   <p>Fun Fact: ${friend.funFact}</p>`;
    document.getElementById('friendDetails').innerHTML = details;
}

const getChangedArrayOfUsersData = (personArray, conversationArray) => {
    const newCommonArray = conversationArray.map(user => {
        personArray.forEach(elem => {
            if (elem.id === user.person) {
                user.person = elem;
                return user;
            }
        });
        return user;
    });
    return newCommonArray;
}


const person = [
    { id: "32323232", name: "Jhohn" },
    { id: "12321321312", "name": "Peter" }
];

const conversation = [
    { id: "323232", person: "32323232", speech: "hello" },
    { id: "243232", person: "12321321312", speech: "hi, how's going" },
    { id: "121212", person: "32323232", speech: "I'm fine" },
    { id: "21322", person: "32323232", speech: "How about yourself?" },
    { id: "21322", person: "4444", speech: "How about yourself?" }
];

console.log(getChangedArrayOfUsersData(person, conversation));
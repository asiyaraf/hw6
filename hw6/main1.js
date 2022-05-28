const mass1 = [1, 2]
const mass2 = [1, 2, 3]
const mass3 = [1, 2, 10]
const mass4 = [1, 2, 415]
const mass5 = [1, 2, 512]

const mass6 = [...mass1, mass2, mass3, mass4, mass5]
console.log(mass6)



const obj= {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3',
    key4 : 'value4',
    key5 : 'value5',
}

const obj2 = {
    ...obj,
    key6 : 'value6',
    key7 : 'value7',
    key8 : 'value8',
}
console.log(obj2)


const list = [];

const name = document.querySelector("#name")
const button = document.querySelector("#button")

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for(let i = 0; i < list.length; i++ ) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".inner");

    document.querySelector(".list").remove();
    form.append(MainDiv)

}
button.onclick = function() {
    const obj = {
        id: list.length,
        text: name.value+", hello"
    }
    this.append(list);
    list.push(obj);
    render()
}
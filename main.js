// const first_name = "raf";
// const last_name = "nas";
//
// console.log(first_name + "" + last_name)
//
// console.log(`first name: ${first_name} ${last_name}`)

// const getFullName = (user) => {
//     // return "First name: " + user.first_name + "/n" + "Last Name: " + user.last_name;
//     return `First name: ${user.first_name}\nLast name: ${user.last_name}`
// }
//
// const user = {
//     first_name: "raf",
//     last_name: "nas"
// }
//
// console.log(getFullName(user))

// const mass = [1,2,3,4,5]
// const mass2 = [...mass]
//
// // for (let i = 0, i < mass.length; i++){
// //     mass2.push(mass[i])
// // }
// console.log(mass2)
//
// const obj = {
//     username: "raf",
//     age: 15,
//     last_name: "nas",
//     full_name: "raf nas"
//
// }
// const obj2 = [{...obj}]
// console.log(obj2)

const props = {
    onSubmit: () => {
        console.log("submit")
    },
    data: [
        {
            key: "value1"
        },
        {
            key2: "value2"
        },
        {
            key3: "value3"
        }
    ]
}
const {data, onSubmit} = props;

console.log(data);

onSubmit();
const mappedEmp = new Map()
mappedEmp.set('linda', { fullName: 'Linda Johnson', id: 1 })
mappedEmp.set('jim', { fullName: 'Jim Thomson', id: 2 })
mappedEmp.set('pam', { fullName: 'Pam Dryer', id: 3 })
console.log(mappedEmp)
/*
Map(3) {
  'linda' => { fullName: 'Linda Johnson', id: 1 },
  'jim' => { fullName: 'Jim Thomson', id: 2 },
  'pam' => { fullName: 'Pam Dryer', id: 3 }
}
*/

console.log('get ', mappedEmp.get('jim')) //get  { fullName: 'Jim Thomson', id: 2 }
console.log('size', mappedEmp.size) //size 3
for(let [key, val] of mappedEmp) {
    console.log('iterate ', key, val)
    /*
        iterate  linda { fullName: 'Linda Johnson', id: 1 }
        iterate  jim { fullName: 'Jim Thomson', id: 2 }
        iterate  pam { fullName: 'Pam Dryer', id: 3 }
    */
}
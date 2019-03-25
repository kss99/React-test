import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'821023',
  'gender' :'남자',
  'job':'전사'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'무민',
  'birthday':'100033',
  'gender' :'남자',
  'job':'무직'

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'나루토',
  'birthday':'234423',
  'gender' :'남자',
  'job':'닌자'

}
]

class App extends Component {
  render() {
    return (
      <div>
       {
         customers.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            );

         })


       }
      </div>
    );
  }
}

export default App;

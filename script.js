let count = 0

/*const value = document.querySelector('#value')
const minus = document.querySelector('.decrease')
const add = document.querySelector('.increase')
const reset = document.querySelector('.reset')

//This is how to code the buttons individually.

minus.addEventListener('click' , (e) => {
  count--;
  value.textContent = count;
  if(count< 0){
    value.style.color = 'red'
  }
})

add.addEventListener('click' , (e) => {
  count++;
  value.textContent = count;
  if(count> 0){
    value.style.color = 'green'
  }
})

reset.addEventListener('click' , (e) => {
  count = 0;
  value.textContent = count;
  if(count === 0){
    value.style.color = 'black'
  }
})*/

//If you wanna save yourself the stress of coding each button individually,you can grab all the buttons, loop through them using
//The forEach method and add an eventListener to each.


const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')



btns.forEach((items) =>{
    items.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
           count--
           value.textContent= count;
           
        }else if(styles.contains('increase')){
            count++
            value.textContent = count
        }else{
            count = 0;
            value.textContent = count
        }

        if(count<0){
            value.style.color = 'red'
        }

        if(count>0){
            value.style.color = 'green'
        }

        if(count=== 0){
            value.style.color = 'black'
        }
    })
})


































let count = 0
//I AM GONNA USE TWO WAYS TO SOLVE THIS PROJECT. FIRST I WILL CODE EACH BUTTON INDIVIDUALLY AS SEEN BELOW

/*const value = document.querySelector('#value')
const minus = document.querySelector('.decrease')
const add = document.querySelector('.increase')
const reset = document.querySelector('.reset')


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

//SECONDLY, TO SAVE TIME AND STRESS, I CAN INSTEAD GRAB ALL THE BUTTONS AND LOOP THROUGH EACH OF THEM USING THE forEach() METHOD
//AND THEN ADD AN EVENTLISTENER TO EACH


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


































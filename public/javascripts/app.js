/* File name - app.js
// Author - Shahriar Moinuddin
// Student id - 300955901
// Date - 27/10/2021 */

console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}
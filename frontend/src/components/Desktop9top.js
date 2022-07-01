import React from 'react'
import '../containers/Contact';


function Desktop9top() {
  return (

    <div>
        <div class="contact-grid">

        <div class="contactleft-column2">
            <h1 className='contactcolumnheaderfont1'>Information About us</h1>
            <p className='contactcolumnfont2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
        </div>


        <div class="contactleft-column2">
            <h1 className='contactcolumnheaderfont1'>Contact Way</h1>

            <p className='contactcolumnfont2'>
                <div class="row">
                <div class="column">
                    {/* <h2>Column 1</h2> */}
                    <ul id="list1">
                        <div id="leftbox1">
                        <li> Tel: 020 7462 7459 </li>
                        <li> E-Mail: Pixelatedparadise@store.com </li>
                        </div>
                    </ul>
                </div>

                <div class="column">
                    {/* <h2>Column 2</h2> */}
                    <ul id="list1">
                        <div id="leftbox1">
                        <li> Support Forum </li>
                        <li> For over 24hr </li>  
                        </div>
                    </ul>
                </div>
                </div>

                <div class="row">
                <div class="column">
                    {/* <h2>Column 3</h2> */}
                    <ul id="list1">
                        <div id="leftbox1">
                        <li> London, England</li>
                        <li> United Kingdom </li>
                        </div>
                    </ul>
                </div>

                <div class="column">
                    {/* <h2>Column 4</h2> */}
                     <ul id="list1">
                        <div id="leftbox1">
                        <li> Free standard  shipping </li>
                        <li> on all orders </li>  
                        </div>
                     </ul>
                  </div>
             </div>                       
          </p>
         </div>
    </div>
 </div>
  )
}

export default Desktop9top
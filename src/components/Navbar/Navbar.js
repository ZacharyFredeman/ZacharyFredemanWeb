import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <navcontainer>
                <navlogo >
                    Home logo
                </navlogo>
                <navitems>
                    <navitem>
                        <navlinks>
                            Websites
                        </navlinks>
                    </navitem>
                    <navitem>
                        <navlinks>
                            Games
                        </navlinks>
                    </navitem>
                    <navitem>
                        <navlinks>
                            Misc
                        </navlinks>
                    </navitem>
                </navitems>
            </navcontainer>
        </nav>
    )
}

export default Navbar;
import React from 'react'

function header(props: any) {
    return (
        <html lang="en">
            <body>
                My nav bar
                {props.children}
            </body>
        </html>
    )
}

export default header
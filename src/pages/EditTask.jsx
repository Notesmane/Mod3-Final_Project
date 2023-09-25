const React = require('react');
// const DefaultLayout = require('./Layout/Default');

function Edit({task}) {
    return(
        <div title="Tasks">
            <h2>Edit Tweet</h2>
            
            <form action={`/api/orders/${task._id}?_method=PUT`} method="POST"> 

                Title: <input type="text" name="title" defaultValue={task.title} required/>

                {/* <textarea name="body" defaultValue={task.body} required></textarea>

                <input type="checkbox" name="sponsored" defaultChecked={task.sponsored} /> */}

                <input type="submit" value="Update"/>

            </form>
        </div>
    )
}

module.exports = Edit;
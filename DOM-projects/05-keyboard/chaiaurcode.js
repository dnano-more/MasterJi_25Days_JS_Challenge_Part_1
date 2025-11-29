console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
        <tr>
            <th>Event Key</th>
            <th>Event Code</th>
            <th>Event KeyCode</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key }</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
        </tr>

    </table>
    </div>
    `
})
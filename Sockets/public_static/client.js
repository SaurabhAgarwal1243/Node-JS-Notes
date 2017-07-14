/**
 * Created by saurabhagarwal on 7/14/17.
 */

let socket = io();

$(function () {
    let start = $('#start')
    let newmsg = $('#newmsg')
    let sendmsg = $('#sendmsg')
    let msglist = $('#msglist')
    let uname = $('#name')
    start.click(function () {
        localStorage.setItem('name', uname.val())
        window.location.href = '/Chatbox.html'
    })


    sendmsg.click(function () {
        var uname = localStorage.getItem('name')
        let data = [uname, newmsg.val()]
        socket.emit('new_message',data)

    })

    socket.on('recv_message', (data) => {
        console.log(data)
        msglist.append($(`<li>${data[0]}:${data[1]}</li>`))
    })

})
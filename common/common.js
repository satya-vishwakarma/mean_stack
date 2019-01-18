module.exports = {
    response: function (status, message = null, total_records = null, data = []) {
        return {
            'meta': {
                'code': status,
                'message': message,
            },
            'total_records': total_records,
            'data': data,
        }
    }
}
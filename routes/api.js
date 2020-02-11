function api(app, db){

    app.get("/api/all", (req, res)=>{
        db.house.findAll({}).then((result)=>{
            res.json(result);
        })
    })
}

module.exports = api;
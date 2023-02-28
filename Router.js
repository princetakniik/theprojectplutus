module.exports =(app)=>{
    require('./src/api_route/userRoute')(app);
    require('./src/api_route/LawOfAmendmentRoute')(app);
    require('./src/api_route/hierarchyRoute')(app);
    require('./src/api_route/DirectorRouter')(app);
}
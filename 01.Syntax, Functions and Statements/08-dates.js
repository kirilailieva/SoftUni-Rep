function dates(month, year){
    let searchedDate = new Date(year,month);
    console.log(searchedDate.getDate());
}
dates(1,2012);
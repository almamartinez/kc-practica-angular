
angular.module("whatapop").filter("UserDistance",["$haversine",
    function ($haversine) {

        return function (sellers,maxKm,userPos) {
            var closeUsers=[];
            for (var i=0; i < sellers.length; i++){
                var usr = sellers[i];
                var sellerPos={"latitude":usr.latitude,"longitude":usr.longitude};
                if($haversine.distance(userPos,sellerPos) <= maxKm){
                    closeUsers.push(usr.id);
                }
            }

            return closeUsers;
        }
    }]);
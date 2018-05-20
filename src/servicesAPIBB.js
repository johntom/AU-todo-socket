import {    inject,    singleton} from 'aurelia-dependency-injection';
import {    HttpClient} from 'aurelia-fetch-client'

@inject(HttpClient)

export class ApiService {
    constructor(http) {
        this.http = http;
        this.upmess = ''
        // users = [];

        this.baseweb = 'http://cm.brookbridgeinc.com:8880/api/'
        //this.baseweb = 'http://localhost:8880/api/'
        this.baseCms = 'http://cm.brookbridgeinc.com:2052/'
        this.baseWorkflow = 'http://cm.brookbridgeinc.com/'
        this.baseSmartSheet = 'https://api.smartsheet.com/2.0/'


        this.baseweb = 'http://cm.brookbridgeinc.com:8880/api/'
      


    }


    deleteDEP(row, token) {
        console.log('this.e ', row.id)
        let pid = row.id
        let url = this.baseweb + `v1/dep/delete`
        // return this.http.fetch(url).then((res) => res.json())
        return this.http.fetch(url, {
            method: 'delete',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        //        , 'Authorization': 'JWT ' + token
            },
            body: JSON.stringify(row)
        }).then((res) => res.json());

    }



    getUserJwt(username, pass) {
        var token = {};
        token.username = username;
        token.password = pass;
        var url = this.baseweb + 'v1/auth/local';
        console.log('url ', url)
        return this.http.fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        }).then((res) => res.json());

    }
    updateUser(token, customer) {
        var url = this.baseweb + 'v1/user'
        return fetch(url, {
            method: 'put',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + token
            },
            body: JSON.stringify(customer)
        }).then((res) => res.json())
    }

    subsriberadd(customer) {
        var url = this.baseweb + 'v1/contacts/create';
        console.log('url ', url)
        //   return {'data':true}
        return fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        }).then((res) => res.json());

    }
    sendemail(customer) {
        var url = this.baseweb + 'v1/contacts/sendemail';
        console.log('url ', url)
        //   return {'data':true}
        return fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        }).then((res) => res.json());

    }

    moveUser(token, customer, mysqlid) {
        var url = this.baseweb + `v1/users/move/${mysqlid}`
        return fetch(url, {
            method: 'put',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + token
            },
            body: JSON.stringify(customer)
        }).then((res) => res.json())
    }
    getImages() {
        var url = `http://www.gtz.com:9010/api/images?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`
        return fetch(url).then((res) => res.json())
    }
    getlistTags(type) {
        var url = this.baseCms + `api/getlisttag/${type}`
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
    getlistPosts(type) {
        var url = this.baseCms + `api/getlistposts/${type}`
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
    getUsers() {
        var url = baseCms + 'api/users'
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
    getallusers(type) {
        var url = this.baseweb + 'v1/getalluser'
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
    getAllBins() {
        var url = this.baseweb + 'v1/bin/getAll'
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }

// { method: ['get'], path: '/api/v1/user/getAll', handler: 'UserController.getAll' }, //find' },
// backen

    getWelcome() {
        var url = this.baseCms + 'api/posts'
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
    // should change this
    // getbcsStatus(bcsnumber) {
    //     // this is workflow no need to jwt ie 151024
    //     // var url = `http://cm.brookbridgeinc.com/api/contract/${bcsnumber}`
    //     var url = baseWorkflow + `api/contract/${bcsnumber}`
    //     return fetch(url, { mode: 'cors' }).then((res) => res.json())
    // },
    // getbcsStatus(token, bcsnumber) {
    getbcsStatus(bcsnumber) {
        var url = this.baseWorkflow + `api/contract/${bcsnumber}`
        console.log('getbcsStatus ', url)
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }

    //    this.http.fetch('upload', {
    //         mode: 'cors',
    //         method: 'POST',
    //         body: formData
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data.message)
    //         this.upmess = data.message
    //         console.log('this.upmess', this.upmess)
    //       })
    //       .catch(error => console.log(error));
    updatepa(row, user) {
        let newrow = {}
        newrow._id = row._id
        newrow.assignto = row.assignto
        newrow.billedamt = row.billedamt
        newrow.completed = row.completed
        newrow.payamt = row.payamt
        newrow.savedamt = row.savedamt
        newrow.template = row.template
        newrow.type = row.type
        newrow.memo = row.memo
        newrow.filename = row.filename
        newrow.createdAt = row.createdAt
        newrow.assignfrom = user.userid // matched staffid unless we use init
        let url = this.baseweb + `v1/case/update`
        return this.http.fetch(url, {
            method: 'put',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // , 'Authorization': 'JWT ' + token
            },
            body: JSON.stringify(newrow)
        }).then((res) => res.json());

    }

    createvio(tolken, dir, dataitem) {
        let bin = dataitem.Bin
        var url = this.baseweb + 'v1/createviolations/' + bin + '/' + dir;
        console.log('url ', url, dataitem.status)
        // for (var [key, value] of formData.entries()) { 
        //  console.log('form ',key, value);
        // }
        dataitem.new = ''
        // console.log('form ', dataitem);
        return this.http.fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: formData
            body: JSON.stringify(dataitem)
        }).then((res) => res.json());
    }

    updatevio(formData, bin, dir, dataitem) {
        // let basewebdemo = 'http://localhost:8880/api/'
        var url = this.baseweb + 'v1/updateviolations/' + bin + '/' + dir;
        console.log('url ', url, dataitem.status)
        for (var [key, value] of formData.entries()) {
            console.log('form ', key, value);
        }
        console.log('url ', dataitem.PACO)
        dataitem.mongoid = dataitem.id
        // console.log('form ', dataitem);
        return this.http.fetch(url, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: formData
            body: JSON.stringify(dataitem)
        }).then((res) => res.json());
    }


    upload(formData, bin, dir) {
        // let bin =10007
        // let dir = 'fdny'
        // var url = this.baseweb + 'v1/upload/'+bin+'/'+dir;
        // let basewebdemo = 'http://cm.brookbridgeinc.com:8880/api/'
        // var url = this.baseweb + 'v1/upload';
        // var url = basewebdemo + 'upload';
        // var url = basewebdemo + 'v1/uploadviolations/'+bin+'/'+dir;

        // let basewebdemo = 'http://localhost:8880/api/'

        var url = this.baseweb + 'v1/uploadviolations/' + bin + '/' + dir;
        // var url = basewebdemo + 'v1/uploadviolations/' + bin + '/' + dir;
        console.log('url ', url)

        for (var [key, value] of formData.entries()) {
            console.log('form ', key, value);
        }
        return this.http.fetch(url, {
            mode: 'cors',
            method: 'POST',
            headers: {
                //'Accept': 'application/json',
                //'Content-Type': 'application/json',
                'enctype': "multipart/form-data"
            },
            body: formData
        }).then((res) => res.json());
    }

    getopenapps(token, bin) {
        var url = this.baseweb + `v1/openapps/${bin}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getopenappsbyuser(token, userid) {
        var url = this.baseweb + `v1/openappsbyuser/${userid}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getbin(token, bin) {
        let url = this.baseweb + `v1/bin/${bin}` // mongo

        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json'
            }
        }).then((res) => res.json())
    }


    savebin(item){
        let url = this.baseweb + `v1/bin/update`
       // delete item.id

       console.log(item)
        return fetch(url, {
            method: 'put',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // , 'Authorization': 'JWT ' + token
            },
            body: JSON.stringify(item)
        }).then((res) => res.json())
    }

    addbin(item){
        let url = this.baseweb + `v1/bin/create`

        return fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // , 'Authorization': 'JWT ' + token
            },
            body: JSON.stringify(item)
        }).then((res) => res.json())
    }


    getcostatus(token, building, status) {
        let bin = building.BIN //Bin
        var url = this.baseweb + `v1/costatus/${bin}/${status}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }



    getbinsummaryco(token, userid) {

        var url = this.baseweb + `v1/binsummaryco/${userid}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getbinsummarycpc(token, userid) {

        var url = this.baseweb + `v1/binsummarycpc/${userid}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getbinsummarypa(token, userid) {

        var url = this.baseweb + `v1/binsummarypa/${userid}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getbinsummarystatusreport(token, userid) {
        // really filing details from status report
        console.log('userid api ', userid)
        var url = this.baseweb + `v1/binsummarystatusreport/${userid}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getbinsummaryvio(token, userid) {

        var url = this.baseweb + `v1/binsummaryvio/${userid}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }


    getopencomplaints(token, bin) {
        var url = this.baseweb + `v1/complaints/${bin}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getopendepviolations(token, building, status) {
        let bin = building.BIN
        var url = this.baseweb + `v1/depviolations/${bin}/${status}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    // getopendotviolations(token, building, status) {
    //     //let bin = building.BuildingId
    //     // or mongo
    //     let bin = building.BIN
    //     let baseTrails = 'http://cm.brookbridgeinc.com:8880/'
    //   //  let url = baseTrails + `api/v1/dotviolations/${bin}/${status}`
    //      let url = this.baseweb +  + `v1/dotviolations/${bin}/${status}`


    //     return fetch(url, {
    //         mode: 'cors',
    //         method: 'get',
    //         headers: {
    //             'Authorization': 'JWT ' + token,
    //             'Accept': 'application/json',
    //         }
    //     }).then((res) => res.json())
    // }

    getopendotviolations(token, building, status) {
        let bin = building.BIN
        var url = this.baseweb + `v1/dotviolations/${bin}/${status}`
        console.log('url', url)
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }


    getopenfdnyviolations(token, building, status) {
        let bin = building.BIN
        var url = this.baseweb + `v1/fdnyviolations/${bin}/${status}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    // getopenfdnyviolations(token, building,status)  {
    //     //let bin = building.BuildingId
    //     // or mongo
    //     let bin = building.BIN
    //     let baseTrails = 'http://cm.brookbridgeinc.com:8880/'
    //     let url = baseTrails + `api/v1/fdnyviolations/${bin}/${status}`

    //     return fetch(url, {
    //         mode: 'cors',
    //         method: 'get',
    //         headers: {
    //             'Authorization': 'JWT ' + token,
    //             'Accept': 'application/json',
    //         }
    //     }).then((res) => res.json())
    // }
    getbcsStatus2(bcsnumber) {
        var url = this.baseweb + `v1/projstatusbcs/${bcsnumber}`
        console.log('getbcsStatus ')
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }

    getBuildings(token, userid) {
        var url = this.baseweb + `v1/getBuildings/${userid}`

        console.log('getBuildings ', url)
        return this.http.fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    ////////// mobile app
    getpublicassebly(token, building, status) {
        //let bin = building.BuildingId
        // or mongo
        let bin = building.BIN //Bin

        let baseTrails = 'http://cm.brookbridgeinc.com:8880/'
        //let url = baseTrails + `api/v1/publicassembly/${bin}/${status}` // mongo
        let url = this.baseweb + `v1/publicassembly/${bin}/${status}` // mongo

        //   let url = baseTrails + `api/v1/propviolationsdob/${bin}` // mysql

        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getcpc(token, building, status) {
        //let bin = building.BuildingId
        // or mongo
        let bin = building.BIN

        let baseTrails = 'http://cm.brookbridgeinc.com:8880/'
        //   let url = baseTrails + `api/v1/cpccovenant/${bin}/${status}` // mongo
        let url = this.baseweb + `v1/cpccovenant/${bin}/${status}` // mongo
        //   let url = baseTrails + `api/v1/propviolationsdob/${bin}` // mysql

        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    //   getbin(token, building) {
    //     //let bin = building.BuildingId
    //     // or mongo
    //      let bin = building.BIN


    //     let baseTrails = 'http://cm.brookbridgeinc.com:8880/'
    //     let url = baseTrails + `api/v1/bin/${bin}` // mongo
    //     //   let url = baseTrails + `api/v1/propviolationsdob/${bin}` // mysql

    //     return fetch(url, {
    //       mode: 'cors',
    //       method: 'get',
    //       headers: {
    //         'Authorization': 'JWT ' + token,
    //         'Accept': 'application/json',
    //       }
    //     }).then((res) => res.json())
    //   }


    getopendobviolations(token, building, status) {
        //let bin = building.BuildingId
        // or mongo
        let bin = building.BIN


        let baseTrails = 'http://cm.brookbridgeinc.com:8880/'

        // let url = baseTrails + `api/v1/dobviolations/${bin}/${status}` // mongo 
        let url = this.baseweb + `v1/dobviolations/${bin}/${status}`
        //   let url = baseTrails + `api/v1/propviolationsdob/${bin}` // mysql

        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getopenecbviolations(token, building, status) {
        let bin = building.BIN
        var url = this.baseweb + `v1/ecbviolations/${bin}/${status}`
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }





    getCharts(token, buildingid) {
        var url = this.baseweb + `v1/propertycharts/${buildingid}`
        console.log('getCharts ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getChartsMock(buildingid) {
        var url = this.baseweb + `v1/propertychartsMock/${buildingid}`
        console.log('getChartsMock ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getChartsDrill(buildingid) {
        var url = this.baseweb + `v1/propertycharts2/${buildingid}`
        console.log('getCharts ', url)
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                // 'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    // getStatus(token, buildingid) {
    //     var url = this.baseweb + `v1/projstatusreport/${buildingid}`
    //     console.log('getStatus ')
    //     return fetch(url, {
    //         mode: 'cors',
    //         method: 'get',
    //         headers: {
    //             'Authorization': 'JWT ' + token,
    //             'Accept': 'application/json',
    //         }
    //     }).then((res) => res.json())
    // }
    //  mar 2018 pass user
    getStatus(token, buildingid, userid,roleid) {
        var url = this.baseweb + `v1/projstatusreport/${buildingid}/${userid}/${roleid}`
        console.log('getStatus=========== ',url)
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }



    getStatusArchive(token, buildingid) {
        var url = this.baseweb + `v1/projstatusreportarchive/${buildingid}`
        console.log('projstatusreportarchive ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getStatusgroup(token, buildingid) {
        var url = this.baseweb + `v1/projstatusgroup/${buildingid}`
        console.log('projstatusreportarchive ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getprojStatus(token, buildingid) {
        var url = this.baseweb + `v1/projstatus/${buildingid}`
        console.log('getprojStatus ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getpropViolationsecb(token, buildingid) {
        var url = this.baseweb + `v1/propviolationsecb/${buildingid}`
        console.log('getpropViolationsecb ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }

    getpropViolationsdob(token, buildingid) {
        var url = this.baseweb + `v1/propviolationsdob/${buildingid}`
        console.log('getpropViolationsdob ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getBuildingdocs(token, buildingid) {
        var url = this.baseweb + `v1/findbuildingdocs/${buildingid}`
        console.log('getBuildingdocs ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    getpropertyDocs(token, proj) {
        var url = this.baseweb + `v1/propertydocs/${proj}`
        console.log('getpropertyDocs ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }


    getFillingdetails(token, proj) {
        var url = this.baseweb + `v1/filingdetails/${proj}`
        console.log('filingdetails ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }


    getFillings(token, proj) {
        var url = this.baseweb + `v1/projstatusgroup/${proj}`
        console.log('getFillings ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    //http://cm.brookbridgeinc.com:8880/api/v1/alert
    getAlerts(token, proj) {
        var url = this.baseweb + `v1/alert`
        console.log('alert ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }


    getprojDocs(token, proj) {
        var url = this.baseweb + `v1/projdocs/${proj}`
        console.log('getprojDocs ')
        return fetch(url, {
            mode: 'cors',
            method: 'get',
            headers: {
                'Authorization': 'JWT ' + token,
                'Accept': 'application/json',
            }
        }).then((res) => res.json())
    }
    //http://10.1.110.203:8880/api/v1/buildcron/11688

    summaryEmail(userid, cutoffmonths) {
        var url = this.baseweb + `v1/buildcron/${userid}/${cutoffmonths}`
        console.log('summaryEmail ', url)
        //  alert(url)
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }

    summaryBinEmail(userid, cutoffmonths) {
        var url = this.baseweb + `v1/buildcronbin/${userid}/${cutoffmonths}`
        console.log('summaryEmail ', url)
        //  alert(url)
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }

    // summaryEmail(userid,cutoffmonths) {
    //     alert(userid+' '+cutoffmonths)
    //     var url = this.baseweb + `v1/buildcron/${userid}/${cutoffmonths}`
    //  alert(  url)
    //       console.log('getFillings ', url)
    //     return fetch(url, {
    //         mode: 'cors'
    //     }).then((res) => res.json())
    // }
    getFillingsnojwt(proj) {
        var url = this.baseweb + `v1/projstatusgroupnojwt/${proj}`
        console.log('getFillings ')
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }
    getprojDocsnojwt(proj) {
        var url = this.baseweb + `v1/projdocsnojwt/${proj}`
        console.log('getprojDocs ')
        return fetch(url, {
            mode: 'cors'
        }).then((res) => res.json())
    }

    //////////////// mongo scrape database
    //http://10.1.110.203:8880/api/v1/publicassembly?Bin=1088749

    // getpublicassembly(token, bin) {
    //     var url = this.baseweb + 'v1/publicassembly?Bin=' + bin+;
    //     return this.http.fetch(url, {
    //         mode: 'cors',
    //         method: 'get',
    //         headers: {
    //             'Authorization': 'JWT ' + token,
    //             'WAccept': 'application/json',
    //         }
    //     }).then((res) => res.json())
    // }


}



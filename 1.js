function myBiodata(nama, umur){
    let biodata = [
        {
            "name"               : nama,
            "age"                : umur,
            "address"            : "Jl.Gn.Polisi RT.47",
            "hobbies"            : ["Gaming","Photography","Coding"],
            "is_married"         : false,
            "list_school"        : [{
                                    "name"     : "SMKN 6 Balikpapan",
                                    "year_in"  : "2012",
                                    "year_out" : "2015",
                                    "major"    : "Network Engineering"
                                   },
                                   {
                                    "name"     : "Universitas Mulia Balikpapan",
                                    "year_in"  : "2015",
                                    "year_out" : "2019",
                                    "major"    : "S1-Informatics"
                                   }],
            "skills"             : [{
                                        "skill_name" : "Network Engineering",
                                        "level"      : "Advanced"
                                   },
                                   {
                                        "skill_name" : "JS Programming",
                                        "level"      : "Beginner"
                                   },
                                   {
                                        "skill_name" : "PHP Programming",
                                        "level"      : "Beginner"
                                   },
                                   {
                                        "skill_name" : "C# Programming",
                                        "level"      : "Beginner"
                                   },
                                   {
                                        "skill_name" : "Python Programming",
                                        "level"      : "Beginner"
                                   }],
            "interest_in_coding" : true
        }
    ];

    return JSON.stringify(biodata);
}

console.log(myBiodata("Amir Makmur", 23));
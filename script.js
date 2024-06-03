function graderes(){
    let name = document.getElementById('name').value;
    let standard = document.getElementById('std').value;
    let m1 = parseFloat(document.getElementById('ss').value);
    let m2= parseFloat(document.getElementById('eng').value);
    let m3= parseFloat(document.getElementById('guj').value);
    let m3= parseFloat(document.getElementById('math').value);
    let m4= parseFloat(document.getElementById('sci').value);

    let mark_sub = m1 +m2+ m3+m4 +m5;
    let per = (mark_sub / 400)*100;

    let grade;
    if(per >= 90) {
        grade = 'A+';
    }
    else if (per >= 80) {
        grade = 'A';
    }
    else if (per >= 70) {
        grade = 'B';
    }
    else if (per >= 60) {
        grade = 'C';
    }
    else if (per >= 50) {
        grade = 'D';
    }
    else {
        grade = 'FAIL';
    }

    let table = "<table border=white>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Standard:</td><td>" + standard + "</td></tr>";
    table += "<tr><td>Total Marks:</td><td>" + mark_sub + "</td></tr>";
    table += "<tr><td>Percentage:</td><td>" + per+ "%</td></tr>";
    table += "<tr><td>Grade:</td><td>" + grade + "</td></tr>";
    table += "</table>";

    
    document.getElementById("display").innerHTML = table;
}

function salary(){
    let name = document.getElementById('name1').value;
    let role_1 =document.getElementById('role2').value;
    let salary_2 =document.getElementById('s2').value;

    let table = "<table border=white>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Empolyee role:</td><td>" + role_1 + "</td></tr>";
    table += "<tr><td>Employee Salary:</td><td>" + salary_2 + "</td></tr>";
    table += "</table>";

    
    document.getElementById("role").innerHTML = table;
}

<script>
function goBack() {
    window.history.back()
}
</script>
<?php
include("functions/init.php");
if(!isset($_GET['id']) && !isset($_GET['term']) && !isset($_GET['cls']) && !isset($_GET['ses'])) {

echo "Error 404!";
} else {


$data =  $_GET['id'];
$tms  =  $_GET['term'];
$cls  =  $_GET['cls'];
$ses  =  $_GET['ses'];

$sql3 = "SELECT * FROM `motor` WHERE `admno` = '$data' AND `term` = '$tms' AND `ses` = '$ses'";
$result_set3 = query($sql3);
$row3 = mysqli_fetch_array($result_set3);

if(row_count($result_set3) == 0){

   echo  "No result uploaded for this user yet<br/><a href='#' onclick='goBack()';>Click here to go back</a>";

} else {

$sql4 = "SELECT sum(sn) AS altol FROM students WHERE `Class` = '$cls'";
$res1 = query($sql4);
$qw1  = mysqli_fetch_array($res1);

$sql5 = "SELECT * FROM students WHERE `AdminID` = '$data'";
$res2 = query($sql5);
$qw2  = mysqli_fetch_array($res2);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> <?php echo $call['school'] ?> | Student Portal</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php echo $call['school'] ?> | Student Portal">
    <meta name="keywords" content="<?php echo $call['school'] ?>">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <!-- JQVMap -->
    <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
    <link rel="icon" href="dist/img/logo.png" type="image/png" />
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
    <link rel="stylesheet" href="plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
    <link rel="stylesheet" href="plugins/toastr/toastr.min.css">
    <!-- summernote -->
    <link rel="stylesheet" href="plugins/summernote/summernote-bs4.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <style>
    .table-bordered td,
    .table-bordered th {

        border: 1px solid #000000;
    }
    </style>
</head>

<body>
    <div class="text-center">
        <h1><img style="width: 50px; height: 50px;" src="dist/img/logo.png"> <?php echo $call['school'] ?></h1>
        <h6><b>Gov`t Approved</b></h6>
        <h5><?php echo $call['addr'] ?></h5>
        <h6><b>Tel.: <?php echo $call['tel'] ?> &nbsp; &nbsp; &nbsp; Website.: <?php echo $call['website'] ?> &nbsp;
                &nbsp; &nbsp;
                Email.:
                <?php echo $call['emal'] ?></b></h6>

        <br />

        <h3>STUDENT PROGRESS REPORT FOR <?php echo strtoupper($tms) ?></h3>
        <br />
    </div>

    <div class="container">
        <div class="row">
            <h5 class="col-sm-6">Name.:
                <b><?php echo $qw2['SurName']." ".$qw2['Middle Name']." ".$qw2['Last Name'] ?></b>
            </h5>
            <h5 class="col-sm-6">Admission Number.: <b><?php echo $data ?></b></h5>
            <h5 class="col-sm-6">Class.: <b><?php echo $cls ?></b></h5>
            <h5 class="col-sm-6">No on Roll.: <b><?php echo $qw1['altol'] ?></b></h5>
            <h5 class="col-sm-6">Times School Opened.: <b><?php echo $row3['tso'] ?></b></h5>
            <h5 class="col-sm-6">Times Absent.: <b><?php echo $row3['tsa'] ?></b></h5>
            <!-- <h5 class="col-sm-6">Times Present.: <?php echo $row3['tsp'] ?></h5> -->
        </div>
    </div>
    <br />
    <table class="table table-hover text-center table-bordered table-striped">
        <tr>
            <th>Subject</th>
            <th>Test<br>(10)</th>
            <th>Assignment<br>(10)</th>
            <th>Class Exercise<br>(10)</th>
            <th>Exam Score<br>(70)</th>
            <th>Total<br>(100)</th>
            <th>1st Term Score</th>
            <th>2nd Term Score</th>
            <th>3rd Term Score</th>
            <th>Annual Score</th>
            <th>Position in Class</th>
            <th>Grade</th>
            <th>Remark</th>
        </tr>
        <?php
$sql= "SELECT * FROM `result` WHERE `admno` = '$data' AND `term` = '$tms' AND `ses` = '$ses'";
$result_set=query($sql);
if(row_count($result_set) == "") {
            
          } else {
while($row= mysqli_fetch_array($result_set))
 {
  $frd = $row['subject'];
$sql2= "SELECT * FROM `score` WHERE `admno` = '$data' AND `subject` = '$frd' AND `ses` = '$ses'";
$result_set2=query($sql2);
$row2= mysqli_fetch_array($result_set2);

if($tms == "1st Term"){
    $annual = $row2['fscore'];
    } else {
    if($tms == "2nd Term") {
    $annual = ($row2['fscore'] + $row2['sndscore']) / 2;
    }else {
    if($tms == "3rd Term") {
      $annual = ($row2['fscore'] + $row2['sndscore'] + $row2['tscore']) / 3;  
    }
    }
    }
?>
        <tr>
            <td><?php echo ucwords($row['subject']); ?></td>
            <td><?php echo $row['test'] ?></td>
            <td><?php echo $row['ass'] ?></td>
            <td><?php echo $row['classex'] ?></td>
            <td><?php echo $row['exam'] ?></td>
            <td><?php echo $row['total'] ?></td>
            <td><?php echo $row2['fscore'] ?></td>
            <td><?php echo $row2['sndscore'] ?></td>
            <td><?php echo $row2['tscore'] ?></td>
            <td><?php echo $annual ?></td>
            <td><?php echo $row['position'] ?></td>
            <td><?php echo $row['grade'] ?></td>
            <td><?php echo $row['remark'] ?></td>
        </tr>
        <?php
}
}
 ?>
    </table>

    <table style="width: 100%;" class="table table-hover table-bordered table-striped">

        <tr>
            <th class="text-center" colspan="2">Affective Domain</th>
            <th class="text-center" colspan="2">Psychomotor</th>
            <th class="text-center" colspan="2">Academic Performance Summary</th>
        </tr>
        <?php
$sql2 = "SELECT * FROM `motor` WHERE `admno` = '$data' AND `term` = '$tms' AND `ses` = '$ses'";
$result_set2 = query($sql2);
$row2 = mysqli_fetch_array($result_set2);
if(row_count($result_set2) == "") {
    echo "<span style='color:red'>No records found</span>";        
  } else {
?>

        <tr>
            <td>Attendance</td>
            <td><?php echo $row2['attendance'] ?></td>
            <td>Sport</td>
            <td><?php echo $row2['sport'] ?></td>
            <td>Mark Possible.: &nbsp;&nbsp; <?php echo $row2['mrkpos'] ?></td>
            <td>Mark Obtained.: &nbsp;&nbsp; <?php echo $row2['mrkobt'] ?></td>
        </tr>
        <tr>
            <td>Punctuality</td>
            <td><?php echo $row2['punctuality'] ?></td>
            <td>Societies</td>
            <td><?php echo $row2['societies'] ?></td>
            <td colspan="2">Percentage.: &nbsp;&nbsp; <?php echo $row2['perc'] ?></td>
        </tr>
        <tr>
            <td>Honesty</td>
            <td><?php echo $row2['honesty'] ?></td>
            <td>Youth Organ</td>
            <td><?php echo $row2['youth'] ?></td>
            <td>Total Grade.: &nbsp;&nbsp; <?php echo $row2['totgra'] ?></td>
            <?php
    if (isset($_SESSION['rep'])) {
   $wed = $_SESSION['rep'];
   echo '<td>'.$wed.'</td>';
} else {
    echo '<td></td>';
}    
?>
        </tr>
        <tr>
            <td>Neatness</td>
            <td><?php echo $row2['neatness'] ?></td>
            <td>Aesthetics</td>
            <td><?php echo $row2['aesth'] ?></td>
            <td colspan="2" rowspan="6">Principal Comment.: &nbsp;&nbsp; <?php echo $row2['principal'] ?></td>
        </tr>
        <tr>
            <td>Non-Aggressive</td>
            <td><?php echo $row2['nonaggr'] ?></td>
        </tr>
        <tr>
            <td>Leadership Skills</td>
            <td><?php echo $row2['leader'] ?></td>
        </tr>
        <tr>
            <td>Relationship with others</td>
            <td><?php echo $row2['relation'] ?></td>
        </tr>
        <tr>
            <td>Relationship with others</td>
            <td><?php echo $row2['relation'] ?></td>
        </tr>
    </table>

</body>

<script type="text/javascript">
window.addEventListener("load", window.print());
</script>

</html>
<?php
}
}
}
?>
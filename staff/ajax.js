$(document).ready(function () {
  //upload first term result
  $("#upl").click(function () {
    var classr = $("#class").val();
    var cls = $("#cls").val();
    var term = $("#term").val();
    var ses = $("#ses").val();

    $(toastr.error("Loading Please wait..."));
    window.location.href =
      "./studres?id=" + classr + "&cls=" + cls + "&term=" + term + "&ses=" + ses;
  });

  //uploading result data

  $("#ressl").click(function () {
    var stsbj = $("#stsbj").val();
    var test = $("#test").val();
    var ass = $("#ass").val();
    var exc = $("#exc").val();
    var exam = $("#exam").val();
    var position = $("#position").val();
    var name = $("#name").val();
    var admis = $("#admis").val();
    var cla = $("#cla").val();
    var term = $("#term").val();
    var ses = $("#ses").val();

    if (stsbj == null || stsbj == "") {
      $(toastr.error("Subject can`t be empty"));
    } else {
      if (test == null || test == "") {
        $(toastr.error("Kindly input test score"));
      } else {
        if (test > 10) {
          $(toastr.error("Test score can`t be greater than 10"));
        } else {
          if (ass == null || ass == "") {
            $(toastr.error("Kindly input assignment score"));
          } else {
            if (ass > 10) {
              $(toastr.error("Assignment score can`t be greater than 10"));
            } else {
              if (exc == null || exc == "") {
                $(toastr.error("Kindly input class exercise score"));
              } else {
                if (exc > 10) {
                  $(
                    toastr.error(
                      "Class exercise score can`t be greater than 10"
                    )
                  );
                } else {
                  if (exam == null || exam == "") {
                    $(toastr.error("Exam can`t be empty"));
                  } else {
                    if (exam > 70) {
                      $(toastr.error("Exam score can`t be greater than 70"));
                    } else {
                      if (position == null || position == "") {
                        $(toastr.error("Position in class field is empty"));
                      } else {
                        $.ajax({
                          type: "post",
                          url: "functions/init.php",
                          data: {
                            stsbj: stsbj,
                            test: test,
                            ass: ass,
                            exc: exc,
                            exam: exam,
                            position: position,
                            name: name,
                            admis: admis,
                            cla: cla,
                            term: term,
                            ses: ses,
                          },
                          success: function (data) {
                            $(toastr.error(data)).html(data);
                          },
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  //-------------reset results------------------//
  $("#reseted").click(function () {
    var adm = $("#subb").val();
    var trm = $("#trm").val();
    var ccs = $("#ccs").val();
    var ses = $("#ses").val();

    $.ajax({
      type: "post",
      url: "functions/init.php",
      data: { adm: adm, trm: trm, ccs: ccs, ses: ses },
      success: function (data) {
        $(toastr.error(data)).html(data);
      },
    });
  });

  //updating result data

  $("#upressl").click(function () {
    var stsbj = $("#stsbj").val();
    var test = $("#test").val();
    var ass = $("#ass").val();
    var exc = $("#exc").val();
    var exam = $("#exam").val();
    var position = $("#position").val();
    var attd = $("#attd").val();
    var punc = $("#punc").val();
    var hons = $("#hons").val();
    var neat = $("#neat").val();
    var nonaggr = $("#nonaggr").val();
    var ldsk = $("#ldsk").val();
    var sprt = $("#sprt").val();
    var soci = $("#soci").val();
    var yth = $("#yth").val();
    var aes = $("#aes").val();
    var rel = $("#rel").val();
    var prin = $("#prin").val();
    var name = $("#name").val();
    var admis = $("#admis").val();
    var cla = $("#cla").val();
    var tms = $("#term").val();
    var ses = $("#ses").val();

    if (stsbj == null || stsbj == "") {
      $(toastr.error("Subject can`t be empty"));
    } else {
      if (test == null || test == "") {
        $(toastr.error("Kindly input test score"));
      } else {
        if (test > 10) {
          $(toastr.error("Test score can`t be greater than 10"));
        } else {
          if (ass == null || ass == "") {
            $(toastr.error("Kindly input assignment score"));
          } else {
            if (ass > 10) {
              $(toastr.error("Assignment score can`t be greater than 10"));
            } else {
              if (exc == null || exc == "") {
                $(toastr.error("Kindly input class exercise score"));
              } else {
                if (exc > 10) {
                  $(
                    toastr.error(
                      "Class exercise score can`t be greater than 10"
                    )
                  );
                } else {
                  if (exam == null || exam == "") {
                    $(toastr.error("Exam can`t be empty"));
                  } else {
                    if (exam > 70) {
                      $(toastr.error("Exam score can`t be greater than 70"));
                    } else {
                      if (position == null || position == "") {
                        $(toastr.error("Position in class field is empty"));
                      } else {
                        $.ajax({
                          type: "post",
                          url: "functions/init.php",
                          data: {
                            stsbj: stsbj,
                            test: test,
                            ass: ass,
                            exc: exc,
                            exam: exam,
                            position: position,
                            name: name,
                            admis: admis,
                            cla: cla,
                            tms: tms,
                            ses: ses,
                          },
                          success: function (data) {
                            $(toastr.error(data)).html(data);
                          },
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  //-------------delete subject results------------------//
  $("#movedel").click(function () {
    var admr = $("#subbr").val();
    var trmr = $("#trmr").val();
    var ccsr = $("#ccsr").val();
    var sbjjr = $("#sbjjr").val();
    var ses = $("#ses").val();

    $.ajax({
      type: "post",
      url: "functions/init.php",
      data: { admr: admr, trmr: trmr, ccsr: ccsr, sbjjr: sbjjr, ses:ses },
      success: function (data) {
        $(toastr.error(data)).html(data);
      },
    });
  });

  //done uploading result
  $("#done").click(function () {
    var classr = $("#admis").val();
    var cls = $("#cla").val();
    var term = $("#term").val();
    var ses = $("#ses").val();

    $(toastr.error("Loading Please wait..."));
    window.location.href = "./resultnext?id=" + classr + "&cls=" + cls + "&term=" + term + "&ses=" + ses;
  });

  //submit result
  $("#subdone").click(function () {
    var classr = $("#admis").val();
    var cls = $("#cla").val();
    var term = $("#term").val();
    var ses = $("#ses").val();
    var attd = $("#attd").val();
    var punc = $("#punc").val();
    var hons = $("#hons").val();
    var neat = $("#neat").val();
    var nonaggr = $("#nonaggr").val();
    var ldsk = $("#ldsk").val();
    var sprt = $("#sprt").val();
    var soci = $("#soci").val();
    var yth = $("#yth").val();
    var aes = $("#aes").val();
    var rel = $("#rel").val();
    var prin = $("#prin").val();
    var tso = $("#tso").val();
    var tsa = $("#tsa").val();
    var tsp = $("#tsp").val();
    var mrkps = $("#mrkps").val();
    var mrkbt = $("#mrkbt").val();
    var perci = $("#perci").val();
    var tog = $("#tog").val();
    var prof = $("#pro").val();

    if (attd == null || attd == "") {
      $(toastr.error("Attendance field is empty"));
    } else {
      if (attd > 5) {
        $(toastr.error("Max attendance score is 5"));
      } else {
        if (punc == null || punc == "") {
          $(toastr.error("Punctuality field is empty"));
        } else {
          if (punc > 5) {
            $(toastr.error("Punctuality field value is greater 5"));
          } else {
            if (hons == null || hons == "") {
              $(toastr.error("Honesty field is empty"));
            } else {
              if (hons > 5) {
                $(toastr.error("Honesty field value can`t be greater than 5"));
              } else {
                if (neat == null || neat == "") {
                  $(toastr.error("Neatness field is empty"));
                } else {
                  if (neat > 5) {
                    $(toastr.error("Neatness field can`t be empty"));
                  } else {
                    if (nonaggr == null || nonaggr == "") {
                      $(toastr.error("Non-Aggresiveness field can`t be empty"));
                    } else {
                      if (nonaggr > 5) {
                        $(
                          toastr.error(
                            "Non-Aggresiveness field value can`t be greater 5"
                          )
                        );
                      } else {
                        if (ldsk == null || ldsk == "") {
                          $(toastr.error("Leadership Skill field is empty"));
                        } else {
                          if (ldsk > 5) {
                            $(
                              toastr.error(
                                "Leadership Skill field value can`t be greater than 5"
                              )
                            );
                          } else {
                            if (sprt == null || sprt == "") {
                              $(toastr.error("Sport field can`t be empty"));
                            } else {
                              if (sprt > 5) {
                                $(
                                  toastr.error(
                                    "Sport field value can`t be greater than 5"
                                  )
                                );
                              } else {
                                if (soci == null || soci == "") {
                                  $(
                                    toastr.error(
                                      "Societies field can`t be empty"
                                    )
                                  );
                                } else {
                                  if (soci > 5) {
                                    $(
                                      toastr.error(
                                        "Societies field value is empty"
                                      )
                                    );
                                  } else {
                                    if (yth == null || yth == "") {
                                      $(
                                        toastr.error(
                                          "Youth Organ field is empty"
                                        )
                                      );
                                    } else {
                                      if (yth > 5) {
                                        $(
                                          toastr.error(
                                            "Youth organ field value can`t be greater than 5"
                                          )
                                        );
                                      } else {
                                        if (aes == null || aes == "") {
                                          $(
                                            toastr.error(
                                              "Aesthetics field is empty"
                                            )
                                          );
                                        } else {
                                          if (aes > 5) {
                                            $(
                                              toastr.error(
                                                "Aesthetics field value can`t be greater than 5"
                                              )
                                            );
                                          } else {
                                            if (rel == null || rel == "") {
                                              $(
                                                toastr.error(
                                                  "Relationship with others field is empty"
                                                )
                                              );
                                            } else {
                                              if (rel > 5) {
                                                $(
                                                  toastr.error(
                                                    "Relationship with others field value can`t be greater than 5"
                                                  )
                                                );
                                              } else {
                                                if (
                                                  prin == null ||
                                                  prin == ""
                                                ) {
                                                  $(
                                                    toastr.error(
                                                      "Teacher comment field is empty"
                                                    )
                                                  );
                                                } else {
                                                  $(
                                                    toastr.error(
                                                      "Loading Please wait..."
                                                    )
                                                  );

                                                  $.ajax({
                                                    type: "post",
                                                    url: "functions/init.php",
                                                    data: {
                                                      attd: attd,
                                                      punc: punc,
                                                      hons: hons,
                                                      neat: neat,
                                                      nonaggr: nonaggr,
                                                      ldsk: ldsk,
                                                      sprt: sprt,
                                                      soci: soci,
                                                      yth: yth,
                                                      aes: aes,
                                                      rel: rel,
                                                      prin: prin,
                                                      classr: classr,
                                                      cls: cls,
                                                      term: term,
                                                      tso: tso,
                                                      tsa: tsa,
                                                      tsp: tsp,
                                                      mrkps: mrkps,
                                                      mrkbt: mrkbt,
                                                      perci: perci,
                                                      tog: tog,
                                                      prof: prof,
                                                      ses: ses,
                                                    },
                                                    success: function (data) {
                                                      $(
                                                        toastr.error(data)
                                                      ).html(data);
                                                    },
                                                  });
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  //preview result
  $("#prev").click(function () {
    var std = $("#std").val();
    var cls = $("#class").val();
    var term = $("#term").val();
    var ses = $("#ses").val();

    $(toastr.error("Loading Please wait..."));
    window.location.href =
      "./moreres?id=" + std + "&cls=" + cls + "&term=" + term + "&ses=" + ses;
  });

  //upload assignment
  $("#uplagn").click(function () {
    var fd = new FormData();
    var file = $("#fileToUpload").prop("files")[0];
    fd.append("assfile", file);

    if (file == null || file == "") {
      $(toastr.error("Assignment file can`t be empty"));
    } else {
      $("#ModalCenter").modal("show");
      $(toastr.error("Loading... Please wait"));

      $.ajax({
        type: "post",
        url: "functions/init.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function (data) {
          $(toastr.error(data)).html(data);
        },
      });
    }
  });

  //edit uploaded assignment file
  $("#eduplagn").click(function () {
    var fd = new FormData();
    var files = $("#edfileToUpload").prop("files")[0];
    fd.append("fle", files);

    if (files == null || files == "") {
      $(toastr.error("Assignment file can`t be empty"));
    } else {
      $("#ModalCenter").modal("show");
      $(toastr.error("Loading... Please wait"));
      $.ajax({
        type: "post",
        url: "functions/init.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function (data) {
          $(toastr.error(data)).html(data);
        },
      });
    }
  });


    //-------------reset assignmnets------------------//
    $("#assreseted").click(function () {
      var assclss = $("#clss").text();
  
      $.ajax({
        type: "post",
        url: "functions/init.php",
        data: {assclss:assclss},
        success: function (data) {
          $(toastr.error(data)).html(data);
        },
      });
    });
});

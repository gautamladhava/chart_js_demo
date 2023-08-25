const ctx = document.getElementById("myChart");
Chart.defaults.font.size = 20;

Chart.defaults.color = "black";
new Chart(ctx, {
  type: "bar",

  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 16,
          },
        },
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
  type: "line",

  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        position: "bottom",
      },
    ],
    options: {
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const ctx3 = document.getElementById("myChart3");

new Chart(ctx3, {
  type: "polarArea",

  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        borderWidth: 2,
        yAxisID: "yAxis",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const ctx4 = document.getElementById("myChart4");

new Chart(ctx4, {
  type: "doughnut",

  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const ctx1 = document.getElementById("myChart1");

new Chart(ctx1, {
  type: "pie",

  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: "false",
    plugins: {
      legend: {
        position: "bottom",
      },
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
      title: {
        display: true,
        text: "Custom Chart Title",
        position: "left",
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0,
        to: 1,
        loop: true,
      },
    },
  },
});

const ctxm = document.getElementById("mixed");

new Chart(ctxm, {
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        type: "line",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        borderColor: "red",
      },
      {
        type: "bar",
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ["red", "green"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    layout: {
      padding: 5,
    },
  },
});

const ctxml = document.getElementById("mixedline");

new Chart(ctxml, {
  data: {
    labels: [
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
    ],
    datasets: [
      {
        type: "line",
        label: "# of Votes",
        data: [0, 10, 5, 2, 20, 30, 40, 40, 30, 20, 2, 5],
        borderWidth: 3,
        borderColor: "gray",
        pointBackgroundColor: "gray",
        tension: 0.4,
        pointRadius: 6,
        pointHovetRadius: 5,
        pointHitRadius: 2,
        // pointBorderWidth:0,
      },
      {
        type: "line",
        label: "# of Votes",
        data: [5, 15, 5, 12, 20, 25, 30, 28, 24, 17, 15, 5],
        borderWidth: 2,
        borderColor: "green",
        tension: 0.4,
        pointRadius: 6,
        pointStyle: "star",

        fill: {
          target: "origin",
        },
        backgroundColor: "#417e41",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          font: {
            size: 14,
            color: "red",
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: "gray",
        },
        border: {
          dash: [20, 10],
        },
      },
      x: {
        grid: {
          color: "gray",
        },
        border: {
          dash: [20, 10],
        },
        ticks: {
          color: "blue",
        },
      },
    },
    animations: {
      tension: {
        duration: 2000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
  },
});

const ctx6 = document.getElementById("myChart5");

new Chart(ctx6, {
  type: 'pie',
  data: {
    labels: [
      'Red',
     
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [ 100],
      backgroundColor: [
        'rgb(255, 99, 132)',       
      ],
      borderWidth:0
     
    }]
  },
  options:{
    plugins: {
      customCanvasBackgroundColor: {
        color: 'Green',
      }
    }
  }
});

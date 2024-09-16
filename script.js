// Simulated data for demo purposes. In a real-world application, this will be fetched from APIs or a database.
const queueData = {
    opd: "15 patients in queue",
    bedAvailability: "22 beds available across wards",
    patientAdmissions: "10 patients admitted in the last 24 hours"
};

// Function to fetch OPD Queue Data
function fetchOPDQueue() {
    // Simulating an API call to fetch real-time OPD data
    document.getElementById('opd-queue').innerText = "Loading...";
    setTimeout(() => {
        // Update the data (would be dynamic in a real implementation)
        document.getElementById('opd-queue').innerText = queueData.opd;
    }, 1000);  // Simulate a delay
}

// Function to fetch Bed Availability
function fetchBedAvailability() {
    // Simulating an API call to fetch real-time bed availability data
    document.getElementById('bed-availability').innerText = "Loading...";
    setTimeout(() => {
        document.getElementById('bed-availability').innerText = queueData.bedAvailability;
    }, 1000);  // Simulate a delay
}

// Function to fetch Patient Admissions Data
function fetchPatientAdmissions() {
    // Simulating an API call to fetch real-time patient admission data
    document.getElementById('patient-admission').innerText = "Loading...";
    setTimeout(() => {
        document.getElementById('patient-admission').innerText = queueData.patientAdmissions;
    }, 1000);  // Simulate a delay
}

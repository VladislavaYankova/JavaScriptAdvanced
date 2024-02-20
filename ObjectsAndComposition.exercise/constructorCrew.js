function constructorCrew(workerInfo) {


    if (workerInfo.dizziness) {
        workerInfo.levelOfHydrated += workerInfo.weight * workerInfo.experience * 0.1;
        workerInfo.dizziness = !workerInfo.dizziness;
    }

    console.log(workerInfo);


}
// constructorCrew(
//     { weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true }
//   );

// constructorCrew(
// { weight: 120,
//   experience: 20,
//   levelOfHydrated: 200,
//   dizziness: true }
// );

constructorCrew(
    { weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );

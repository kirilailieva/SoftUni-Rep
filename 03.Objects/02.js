function solve(input){
    let weight = input['weight'];
    let experience = input['experience'];
    let hydration = input['levelOfHydrated'];
    let dizzy = input['dizziness'];

    if(dizzy){
        let amount = 0.1 * weight * experience;
        hydration += amount;
        input['levelOfHydrated'] = hydration;
        input['dizziness'] = false
        return input;
    }
    else return input;
}

console.log(solve(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));
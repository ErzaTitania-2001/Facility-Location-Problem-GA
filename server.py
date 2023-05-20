from flask import Flask, jsonify, request
from UFLPGeneticProblem import UFLPGeneticProblem
import numpy as np

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def doWork():
    ga = UFLPGeneticProblem(
        potentialSitesFixedCosts = np.array([1,2,3,4,5,6]),
        facilityToCustomerCost =np.array([[1,10], [2,11],[3,12], [4,13],[5,14],[6,15]]), #[i,j] value
        mutationRate = 0.01,
        crossoverMaskRate = 0.4,
        eliteFraction = 1/3,
        populationSize = 150,
        cacheParam = 50,
        maxRank = 2.5,
        minRank = 0.712,
        maxGenerations = 5,
        nRepeat = 10,
        printProgress = True
    )

    

    ga.run()

    bestIndividual = ga.population[0]
    print(" \n GA Popu : ", ga.score)

    bestPlan = ga.bestIndividualPlan()

    totalTime = ga.mainLoopElapsedTime

    print(bestPlan)
    print(totalTime)
    
    return jsonify({'Best Plan': str(bestPlan), 'Total Time': str(totalTime)})

if __name__ == '__main__':
    app.run(debug = True)

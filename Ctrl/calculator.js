angular.module('CalculatorApp', [])
    .controller('CalculatorController', function ($scope) {

        $scope.minimipris = 0;
        $scope.result = 0;
        $scope.semesters = [
            { value: 10, name: "10%" },
            { value: 12, name: "12%" },
            { value: 15, name: "15%" },
            { value: 20, name: "20%" }];
        $scope.semester = $scope.semesters[1];

        $scope.arbetsgivaravgifters = [
            { value: 45, name: "45%" },
            { value: 50, name: "50%" },
            { value: 80, name: "80%" },
            { value: 100, name: "100%" }];
        $scope.arbetsgivaravgifter = $scope.arbetsgivaravgifters[0];

        $scope.sjukadagars = [
            { value: 5, name: "5" },
            { value: 10, name: "10" },
            { value: 12, name: "12" },
            { value: 13, name: "13" },
            { value: 14, name: "14" },
            { value: 15, name: "15" },
            { value: 20, name: "20" },
            { value: 30, name: "30" },
            { value: 50, name: "50" }];
        $scope.sjukadagar = $scope.sjukadagars[2];

        $scope.snittlon = 25000;
        $scope.antalanstalda = 20;

        $scope.calculate = function () {
            var snittlon = parseInt($scope.snittlon);
            var semester = snittlon * parseFloat($scope.semester.value / 100);
            var arbetsgivaravgifter = (snittlon + semester) * parseFloat($scope.arbetsgivaravgifter.value / 100);
            var result = snittlon + semester + arbetsgivaravgifter;
            $scope.minimipris = Math.round(result);
            $scope.indirektakostnader = Math.round(result * 0.5);
            $scope.sjalvkostnad = $scope.minimipris + $scope.indirektakostnader;
            var perdag = $scope.sjalvkostnad / 165 * 8;
            $scope.perdag = Math.round(perdag);
            $scope.kostnad = Math.round(perdag * $scope.antalanstalda * $scope.sjukadagar.value);
        }

        $scope.calculate();

    });
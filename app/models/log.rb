class Log < ActiveRecord::Base

    def macronutrient_calculator
        self.results = ''
        ree = (current_weight * 10) + (current_height * 6.25) - (age * 5)

        if sex == 'female'
            ree = ree - 161
        elsif sex == 'male'
            ree = ree + 5
        end

        self.results << "Your Resting Energy Expenditure (REE) is #{ree}. "

        case activity_level
        when 'sedentary'
            tdee = (ree * 1.2).round
        when 'light'
            tdee = (ree * 1.375).round
        when 'medium'
            tdee = (ree * 1.55).round
        when 'intense'
            tdee = (ree * 1.725).round
        end

        self.results << "Your Total Daily Energy Expenditure (TDEE) is #{tdee}. "

        case current_goal
        when 'maintain'
            goal_tdee = tdee.round
        when 'lose'
            goal_tdee = (tdee * 0.8).round
        when 'gain'
            goal_tdee = (tdee * 1.2).round
        end

        self.results << "In order to #{current_goal} weight, you have to eat approximately #{goal_tdee} calories per day. "

        protein_intake = (current_weight * 1.830).round
        fats_intake = ((goal_tdee * 0.25) / 9).round
        carbohydrates_intake = ((goal_tdee - (fats_intake * 9) - (protein_intake * 4)) / 4).round

        self.results << "After further calculations, your recommended macros are calculated to be #{protein_intake}g of protein, #{fats_intake}g of fats, and #{carbohydrates_intake} of carbohydrates. "
    end

    # t.integer :age
    # t.string :sex
    # t.integer :current_weight
    # t.integer :current_height
    # t.string :activity_level
    # t.string :current_goal
    # t.text :results
    # t.timestamps
end
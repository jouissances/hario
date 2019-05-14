class TrainersController < ApplicationController
    def index
        @trainers = Trainer.order(:id)
        render json: @trainers
    end
end

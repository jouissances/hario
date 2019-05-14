class LogsController < APIController
    def index
        @logs = Log.order(:created_at)
        render json: @logs
    end

    def show
        @log = Log.find(params[:id])
        @log.calculate_macros
        render json: @log
    end

    def create
        @log = Log.create(log_params)
        render json: @log
    end

    private

    def log_params
        params.require(:log).permit(:age, :sex, :current_weight, :current_height, :activity_level, :current_goal, :results, :created_at, :updated_at)
    # t.integer :age
    # t.string :sex
    # t.integer :current_weight
    # t.integer :current_height
    # t.string :activity_level
    # t.string :current_goal
    # t.text :results
    # t.timestamps
    end
end

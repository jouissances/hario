class ToolsController < ApplicationController
    def index
        @tools = Tool.order(:id)
        render json: @tools
    end

    def show
        @tool = Tool.find(params[:id])
        render json: @tool
    end
end

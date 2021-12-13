require 'date'

module Jekyll
  module DateFilter
    def ordinal(date)
      ordinal = ""
      day = date.strftime('%-d')
      case day
      when "1", "21", "31";
        ordinal = "st"
      when "2", "22";
        ordinal = "nd"
      when "3", "23";
        ordinal = "rd"
      else
        ordinal = "th"
      end

      date.strftime('%A, %B %-d') + ordinal
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateFilter)
